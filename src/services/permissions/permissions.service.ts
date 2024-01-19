import HttpClient from "../HttpClient";

export  interface IPermissions {
  id: 1;
  title:string;
}

class PermissionsService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/permissions";
  }

  async getPermissions() {
    return await this.httpClient.getWithAuth<Promise<IPermissions[]>>(this.path);
  }
}
export default new PermissionsService();
