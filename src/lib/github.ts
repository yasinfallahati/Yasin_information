import { GitHubRepo, GitHubUser, GitHubStats } from "@/types/github";

const GITHUB_USERNAME = "yasinfallahati";
const GITHUB_API = "https://api.github.com";

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const repos = await fetchGitHubRepos();
    if (!repos.length) return null;

    const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const languages: Record<string, number> = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const user = await fetchGitHubUser();

    return {
      repos: user?.public_repos ?? repos.length,
      followers: user?.followers ?? 0,
      following: user?.following ?? 0,
      stars,
      languages,
    };
  } catch {
    return null;
  }
}
