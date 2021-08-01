import { AUTHORIZE_TOKEN, GITHUB_API_URL } from "../../configs/constants";
import { INotepad } from "../../modules/Notepad/Interfaces";
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
      create: (notepad: INotepad) => this.post("/gists", notepad),
      update: (notepad: any) => this.patch(`/gists/${notepad.id}`, notepad),
    };
  }

  get gists() {
    return {
      getPublicGists: (page: number) => this.get(`/gists/public?page=${page}`),
    };
  }
}

export default GithubApiClient;
