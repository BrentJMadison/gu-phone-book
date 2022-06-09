import api from "./BaseAPI";

class PhoneService {
  getAll() {
    return api.get("");
  }

  delete(id) {
    return api.delete(`/${id}`);
  }

  get(id) {
    return api.get(`/${id}`);
  }

  create(data) {
    return api.post("", data);
  }

  update(id, data) {
    return api.put(`/${id}`, data);
  }
}

export default new PhoneService();
