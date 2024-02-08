import HttpClient from "../HttpClient";

export interface ICargosResponse {
  id: number;
  description: string;
  salario: number;
}

class CargosService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/cargos";
  }

  async getCargos() {
    return await this.httpClient.getWithAuth<Promise<ICargosResponse[]>>(this.path);
  }
}
export default new CargosService();
