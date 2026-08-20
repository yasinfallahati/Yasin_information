"use client";

import { useState, useEffect } from "react";
import { GitHubStats } from "@/types/github";

const GITHUB_USERNAME = "yasinfallahati";

export function useGithub() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const repos = await reposRes.json();

        const stars = repos.reduce(
          (acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count,
          0
        );
        const languages: Record<string, number> = {};
        repos.forEach((repo: { language: string | null }) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const user = userRes.ok ? await userRes.json() : null;

        if (!cancelled) {
          setStats({
            repos: user?.public_repos ?? repos.length,
            followers: user?.followers ?? 0,
            following: user?.following ?? 0,
            stars,
            languages,
          });
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, loading, error };
}
