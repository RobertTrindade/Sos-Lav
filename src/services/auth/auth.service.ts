import HttpClient from "../HttpClient";
import LocalStorageService from "./localStorage.service";

interface ILoginResponseDto {
  token: string;
}

class AuthService {
  httpClient;
  path: string;
  localStorageService!: typeof LocalStorageService;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "auth";
    this.localStorageService = LocalStorageService;
  }

  async login() {
    try {
      const { token }: ILoginResponseDto = await this.httpClient.post({
        path: this.path,
      });
      this.localStorageService.saveToken(token);
    } catch (error) {
      return error;
    }
  }
}

export default new AuthService();
