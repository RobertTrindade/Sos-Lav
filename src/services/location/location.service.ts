import HttpClient from "../HttpClient";

export interface ILocationMotoristaDTO {
  name: string;
  xp: number;
  statusTrabalho: string;
  id: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
}

class LocationMotoristasService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/motorista-location";
  }

  async getMotoristas(params?: string) {
    const path = params ? `${this.path}?${params}&limit=50&page=1` : this.path;
    return await this.httpClient.get<Promise<ILocationMotoristaDTO[]>>(path);
  }

  async getMotorista(id: number) {
    return await this.httpClient.get<Promise<ILocationMotoristaDTO[]>>(
      `${this.path}/${id}`
    );
  }

  async editMotorista(id: number, body: any) {
    return await this.httpClient.put<Promise<ILocationMotoristaDTO[]>>(
      `${this.path}/${id}`,
      body
    );
  }

  async aproveDriver(id: number, body: unknown) {
    return await this.httpClient.patch<Promise<ILocationMotoristaDTO[]>>(
      `${this.path}/${id}`,
      body
    );
  }
}
export default new LocationMotoristasService();
