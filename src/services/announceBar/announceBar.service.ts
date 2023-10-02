import HttpClient from "../HttpClient";

export interface IAnnounceBarDto {
  _id: string;
  message: string;
  link: string;
  active: boolean;
}

class AnnounceService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/announces";
  }

  async getMessages(revalidate: number) {
    return await this.httpClient.get<Promise<IAnnounceBarDto[]>>(
      this.path,
      revalidate
    );
  }
}
export default new AnnounceService();
