import HttpClient from "../HttpClient";

class ChamadosService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/pallet";
  }

  async listAll(revalidate?: number) {
    return await this.httpClient.get(`${this.path}`, revalidate);
  }
}
export default new ChamadosService();
