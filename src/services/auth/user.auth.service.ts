import HttpClient from "../HttpClient";
import LocalStorageService from "./localStorage.service";

interface ILoginResponseDto {
  token: string;
  permissionCount: number;
}

interface IAuthDto {
  email: string;
  password: string;
}

class AuthUserService {
  httpClient;
  path: string;
  localStorageService!: typeof LocalStorageService;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/auth/login";
    this.localStorageService = LocalStorageService;
  }

  async login(data: IAuthDto) {
    try {
      const res: ILoginResponseDto = await this.httpClient.post(
        this.path,
        data
      );

      if (!res.token) {
        return res;
      }
      this.localStorageService.saveToken(res.token);
    } catch (error) {
      console.log({ error });
      return error;
    }
  }
}

export default new AuthUserService();
