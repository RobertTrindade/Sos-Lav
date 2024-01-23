import HttpClient from "../HttpClient";

export interface IUploadService {
  url: string;
}

class UploadService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/upload-file";
  }

  async upload(body: FormData, unique = true) {
    return await this.httpClient.upload<Promise<IUploadService>>(
      `${this.path}`,
      body,
      unique
    );
  }
}
export default new UploadService();
