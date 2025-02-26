import $api from "../http";
export default class DonationService {
  static async register(
    email,
    surname,
    name,
    patronymic,
    university,
    employmentStatus,
    password
  ) {
    return $api.post("/auth/register", {
      email,
      surname,
      name,
      patronymic,
      university,
      employmentStatus,
      password,
    });
  }
  static async login(email, password) {
    return $api.post("/auth/donations", { email, password });
  }
  static async logout() {
    return $api.post("/auth/logout");
  }
}
