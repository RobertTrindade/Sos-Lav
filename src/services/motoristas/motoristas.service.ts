import HttpClient from "../HttpClient";

export interface IMotoristaDto {
  id: number;
  role: string;
  name: string;
  celular: string;
  email: string;
  password: string;
  status: string;
  imageUrl: string | null;
  code: string | null;
  codeExpiresIn: string | null;
  createdAt: string;
  updatedAt: string;
  xp: number;
  statusTrabalho: string;
  cnhId: number;
  birthdate: number;
  cpf: string;
  rg: string;

  motoristasEnderecoId: number;
  Cnh: {
    id: number;
    cnh: string;
    cnh_categoria: string;
    cnh_validade: string;
    categoria: string;
    cnh_pdf: string;
  };
}

class MotoristasService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/motoristas";
  }

  async getMotoristas() {
    return await this.httpClient.get<Promise<IMotoristaDto[]>>(this.path);
  }
  async getMotorista(id: number) {
    return await this.httpClient.get<Promise<IMotoristaDto>>(
      `${this.path}/${id}`
    );
  }

  async aproveDriver(id: number, body: unknown) {
    return await this.httpClient.patch<Promise<IMotoristaDto>>(
      `${this.path}/${id}`,
      body
    );
  }
}
export default new MotoristasService();
