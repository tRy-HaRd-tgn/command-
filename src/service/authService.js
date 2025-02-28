import $api from "../http";
export default class AuthService {
  static async register(
    email,
    surname,
    name,
    patronymic,
    university,
    employmentStatus,
    password,
    passwordRepeat
  ) {
    return $api.post("/auth/register", {
      email,
      surname,
      name,
      patronymic,
      university,
      employmentStatus,
      password,
      passwordRepeat,
    });
  }
  static async login(email, password) {
    return $api.post("/auth/login", { email, password });
  }
  static async logout() {
    return $api.post("/auth/logout");
  }
  static async confirm(token) {
    return $api.post("/auth/email-confirmation", { token });
  }
}
