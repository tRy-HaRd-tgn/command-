import $api from "../http";
export default class TestService {
  static async belbinTest(array) {
    return $api.post("tests/belbin", array);
  }
  static async hardSkillsTest(array) {
    return $api.post("tests/hard-skill", array);
  }
  
}
