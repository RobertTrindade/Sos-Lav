import HttpClient from "../HttpClient";

export interface IMotoristaDto {
  id: number;
  role: string;
  name: string;
  celular: string;
  email: string;
  password: string;
  status: string;
  imageUrl: string;
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
  latitude: number;
  longitude: number;
  pdfContrato: string;

  motoristasEnderecoId: number;
  Cnh: {
    id: number;
    cnh: string;
    cnh_categoria: string;
    cnh_validade: string;
    categoria: string;
    cnh_pdf: string;
  };
  MotoristasEndereco: {
    id: number;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
  };
}

export interface IMotoristasDto {
  data: IMotoristaDto[];
  totalItems: 2;
  totalPages: 1;
  itemsPerPage: 50;
  page: 1;
}

class MotoristasService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/motoristas";
  }

  async getMotoristas(params?: string) {
    const path = params ? `${this.path}?${params}&limit=50&page=1` : this.path;
    return await this.httpClient.get<Promise<IMotoristasDto>>(path);
  }
  async getMotorista(id: number) {
    return await this.httpClient.get<Promise<IMotoristaDto>>(
      `${this.path}/${id}`
    );
  }

  async editMotorista(id: number, body: any) {
    return await this.httpClient.put<Promise<IMotoristaDto>>(
      `${this.path}/${id}`,
      body
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
