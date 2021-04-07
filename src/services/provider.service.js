import { API_HOST } from "../utils/constant";
export class ProviderService {
  async addProvider(data) {
    const response = await fetch(`${API_HOST}/proveedor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  async deleteProvider(id) {
    const response = await fetch(`${API_HOST}/proveedor/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
  async putProvider(data) {
    const response = await fetch(`${API_HOST}/proveedor/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  async showProviders(page, search) {
    const response = await fetch(
      `${API_HOST}/proveedor/proveedores-paginated?pagina=${page}&proveedor=${search}`
    );
    return response.json();
  }
  async getProviders() {
    const response = await fetch(`${API_HOST}/proveedor`);
    return response.json();
  }
  async changeStatus(query) {
    const response = await fetch(`${API_HOST}/proveedor/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });
    return response.json();
  }
}
