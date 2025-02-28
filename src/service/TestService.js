import $api from "../http";
export default class TestService {
  static async belbinTest(array) {
    return $api.post("tests/belbin", { array });
  }
}
