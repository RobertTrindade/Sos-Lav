import HttpClient from "../HttpClient";

export interface IUsuariosDto {
  name: string;
  email: string;
  imageUrl: string;
  role: string;
  permissions: IUsuariosPermissions[];
}

export interface IUsuariosPermissions {
  id: number;
  title: string;
}

class UserService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/usuarios/findmyself";
  }

  async getMyself() {
    return await this.httpClient.getWithAuth<Promise<IUsuariosDto>>(this.path);
  }
}
export default new UserService();
