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
    passwordRepeat,
    studyDirection,
    appointment
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
      appointment,
      studyDirection,
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
  static async passwordResetReq(email) {
    return $api.post("/auth/password-recovery/reset", email);
  }
  static async passwordReset(password) {
    return $api.post("/auth/password-recovery/new", { password });
  }
}
