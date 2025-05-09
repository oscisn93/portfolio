import { Octokit } from "octokit";
import type { Events } from "./types";

class GitHubAPI {
  private client: Octokit;
  private username: string;
  constructor(username: string) {
    this.username = username;
    this.client = new Octokit({
      auth: import.meta.env.GITHUB_ACCESS_TOKEN,
    });
  }

  async getLatestEvents(): Promise<Events> {
    try {
      const response = await this.client.request(
        `GET /users/${this.username}/events`,
        {
          username: this.username,
          per_page: 10,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            accept: "application/vnd.github+json",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
      return response.data as Events;
    } catch (e) {
      console.error(e);
    }
    return [];
  }
}

export default new GitHubAPI("oscisn93");
