import $api from "../http";
export default class UserService {
  static async getProfile() {
    return $api.get("users/profile");
  }
  static async updateAvatar(file) {
    const formData = new FormData();
    formData.append("file", file);
    return $api.patch("users/profile/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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
    return $api.get("users/profile/tests/soft-skill-info");
  }
  static async getHardSkillInfo(array) {
    return $api.get("users/profile/hard-skills", array);
  }
  static async getUserProjects() {
    return $api.get("users/profile/projects");
  }
  static async updateContacts(telegram, phoneNumber) {
    return $api.patch("users/profile/contacts", {
      telegram,
      phoneNumber,
    });
  }
}
