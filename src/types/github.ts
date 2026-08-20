export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}

export interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  languages: Record<string, number>;
}
