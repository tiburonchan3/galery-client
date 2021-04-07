import { API_HOST } from "../utils/constant";

export class MarkService {
  async addMark(data) {
    const response = await fetch(`${API_HOST}/marca`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  async showMarks(page,search) {
    const response = await fetch(`${API_HOST}/marca/marcas-paginated?pagina=${page}&marca=${search}`);
    return response.json();
  }
  async getMarks(){
    const response = await fetch(`${API_HOST}/marca`);
    return response.json();
  }
  async changeStatus(query){
    const response = await fetch(`${API_HOST}/marca/status`,{
      method:"PUT",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(query)
    })
    return response.json()
  }
  async deleteMark(id){
    const response = await fetch(`${API_HOST}/marca/${id}`,{
      method:'DELETE'
    })
    return response.json()
  }
  async putMark(data) {
    const response = await fetch(`${API_HOST}/marca/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
