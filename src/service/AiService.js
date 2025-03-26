import $api from "../http";
export default class AiService {
  static async ollamaTest(prompt, model, stream) {
    return $api.post("api/generate", { prompt, model, stream });
  }
}
