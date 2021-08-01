import { AUTHORIZE_TOKEN, GITHUB_API_URL } from "../../configs/constants";
import HttpClient from "./HttpClient";

class GithubApiClient extends HttpClient {
  constructor() {
    super({
      baseURL: GITHUB_API_URL,
      headers: {
        Authorization: `token ${AUTHORIZE_TOKEN}`,
      },
    });
  }

  get notepads() {
    return {
      get: () => this.get("/gists"),
      getById: (id: string) => this.get(`/gists/${id}`),
      delete: (id: string) => this.delete(`/gists/${id}`),
      create: (notepad: any) => this.post("/gists", notepad),
      update: (notepad: any) => this.put(`/gists/${notepad.id}`, notepad),
    };
  }

  get gists() {
    return {
      getPublicGists: () => this.get("/gists/public"),
    };
  };
}

export default GithubApiClient;
