import axios from "axios";

export default class NotepadService {
  static async getNotepads() {
    const response = await fetch("https://api.github.com/gists", {
      headers: {
        Authorization: "token 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",
      },
    });
    return response.json();
  }
}
