import $api from "../http";
export default class UserService {
  static async getProfile() {
    return $api.get("users/profile");
  }
  static async updateAvatar(file) {
    const formData = new FormData();
    formData.append("file", file);
    return $api.patch("users/profile/avatar", formData);
  }
  static async updateProfile(
    surname,
    name,
    patronymic,
    university,
    employmentStatus,
    isTwoFactorEnabled,
    studyDirection,
    appointment
  ) {
    return $api.patch("users/profile", {
      surname,
      name,
      patronymic,
      university,
      employmentStatus,
      isTwoFactorEnabled,
      studyDirection,
      appointment,
    });
  }
  static async getSoftSkillInfo() {
    return $api.get("users/profile/soft-skill-info");
  }
}
