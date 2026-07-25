import { HttpException, Injectable } from '@nestjs/common';

const GITHUB_API_URL = 'https://api.github.com';

interface GithubUser {
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
}

@Injectable()
export class GithubService {
  private async request<T>(path: string): Promise<T> {
    const response = await fetch(`${GITHUB_API_URL}${path}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });

    const body = await response.json();

    if (!response.ok) {
      throw new HttpException(body?.message ?? 'Error al consultar la API de GitHub', response.status);
    }

    return body as T;
  }

  getUser(username: string) {
    return this.request(`/users/${username}`);
  }

  async getUserSummary(username: string) {
    const user = await this.request<GithubUser>(`/users/${username}`);

    return {
      name: user.name,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
    };
  }

  getUserRepos(username: string) {
    return this.request(`/users/${username}/repos`);
  }

  getRepo(username: string, repo: string) {
    return this.request(`/repos/${username}/${repo}`);
  }

  getRepoCommits(username: string, repo: string) {
    return this.request(`/repos/${username}/${repo}/commits`);
  }
}
