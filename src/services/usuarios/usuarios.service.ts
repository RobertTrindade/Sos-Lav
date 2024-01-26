import { IUsuarioValues } from "@/src/contexts/usuarios";
import HttpClient from "../HttpClient";

export interface IUsuariosDto {
  name: string;
  email: string;
  imageUrl: string;
  role: string;
  Permissions: IUsuariosPermissions[];

  password: string;
  status: string;
  code: null;
  codeExpiresIn: null;
  createdAt: string;
  updatedAt: string;
  cargosId: 1;
  groupsId: null;
  celular: string;
  emailPessoal: string;
  birthdate: string;
  cpf: string;
  pdfContrato: string;
  idEndereco: 3;
  Cargo: {
    id: number;
    description: string;
    salario: number;
  };
}

export interface IUsuariosPermissions {
  id: number;
  title: string;
}

export interface IUserDto {
  id: 10;
  role: string;
  name: string;
  email: string;
  password: string;
  status: string;
  imageUrl: string;
  code: null;
  codeExpiresIn: null;
  createdAt: string;
  updatedAt: string;
  cargosId: 1;
  groupsId: null;
  celular: string;
  emailPessoal: string;
  birthdate: string;
  cpf: string;
  pdfContrato: string;
  idEndereco: number;
  Cargo: {
    id: number;
    description: string;
    salario: number;
  };
  Permissions: {
    id: number;
    title: string;
  }[];
  Endereco: {
    id: 3;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
  };
  patios: {
    nome: string;
    id: number;
  }[];
}

class UserService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/usuarios";
  }

  async getMyself() {
    return await this.httpClient.getWithAuth<Promise<IUsuariosDto>>(
      `${this.path}/findmyself`
    );
  }
  async getAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<IUsuariosDto[]>>(
      `${this.path}${params}`
    );
  }

  async getById(params?: string) {
    return await this.httpClient.get<Promise<IUserDto>>(
      `${this.path}/${params}`
    );
  }

  async createUser(body: any) {
    return await this.httpClient.post<Promise<IUsuariosDto>>(this.path, body);
  }

  async updateUser(id: number, body: any) {
    return await this.httpClient.put<Promise<IUsuariosDto>>(
      `${this.path}/${id}`,
      body
    );
  }
}
export default new UserService();
