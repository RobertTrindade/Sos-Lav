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
  cnh?: string;
  motoristasEnderecoId: number;

  Cnh: {
    id: number;
    cnh: string;
    cnhCategoria: string;
    cnhValidade: string;
    cnhPdf: string;
  };
  MotoristasEndereco: {
    id: number;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
  };
  EmpresaReboque: {
    id: 2;
    nome: string;
    cnpj: string;
  };
  Reboques: [
    {
      id: 4;
      crlvUrl: string;
      placa: string;
      motoristasId: 4;
    }
  ];
}

class MotoristasService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/motoristas";
  }

  async getMotoristas(params?: string) {
    console.log(`${this.path}?${params}`)
    return await this.httpClient.get<Promise<IMotoristaDto[]>>(
      `${this.path}${params}`
    );
  }
  async getMotorista(id: number, revalidade?: number) {
    return await this.httpClient.get<Promise<IMotoristaDto>>(
      `${this.path}/${id}`,
      revalidade
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
