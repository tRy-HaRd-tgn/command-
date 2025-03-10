import $api from "../http";
export default class ProjectService {
  static async createProject(img, name, description, array) {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("tasks", JSON.stringify(array));
    return $api.post("projects/create", formData);
  }
  static async getProjects() {
    return $api.get("projects");
  }
}
