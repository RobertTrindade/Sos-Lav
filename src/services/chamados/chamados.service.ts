import HttpClient from "../HttpClient";

export interface IChamadosResponse {
  id: number;
  createAt: string;
  updatedAt: string;
  equipamentoSolicitado: string;
  tipoVeiculo: string;
  tipoApreensao: string;
  patioId: number;
  status: string;
  detalhes: string;
  urgencia: string;
  origem: string;
  vehiclesQuantity: number;
  driversQuantity: number;
  multiple: false;
  chamadosLocalId: number;
  chamadorId: number;
}

export interface ICreateChamadoDto {
  patio: number;
  equipamentoSolicitado: string;
  tipoVeiculo: string;
  tipoApreensao: string;
  urgencia: string;
  detalhes: string;

  origem: string;
  localizacao: {
    estado: string;
    uf: string;
    municipio: string;
    distrito: string;
    cep: string;
    latitude: string;
    longitude: string;
    enderecoCompleto: string;
  };
  multiple: boolean;
  vehiclesQuantity: number;
  driversQuantity: number;
}

export interface IChamado {
  id: number;
  createAt: string;
  updatedAt: string;
  equipamentoSolicitado: string;
  tipoVeiculo: string;
  tipoApreensao: string;
  patioId: number;
  status: string;
  detalhes: string;
  urgencia: string;
  origem: string;
  vehiclesQuantity: number;
  driversQuantity: number;
  multiple: boolean;
  chamadosLocalId: number;
  chamadorId: number;
  patioName: string;
  chamadorName: string;
  localizacaoName: string;

  patio: {
    nome: string;
  };
  chamador: {
    name: string;
  };
  Ncv: string[];
  fotos: string[];

  localizacao: {
    enderecoCompleto: string;
    id: number;
    estado: string;
    uf: string;
    municipio: string;
    distrito: string;
    cep: string;
    latitude: string;
    longitude: string;
  };
}

export interface IGetChamados {
  data: IChamado[];
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  page: number;
}

class ChamadosService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/chamados";
  }

  async createChamado(body: any) {
    return await this.httpClient.post<Promise<IChamadosResponse>>(
      `${this.path}`,
      body
    );
  }
  async listOne(id?: string) {
    return await this.httpClient.getWithAuth<Promise<IChamado>>(
      `${this.path}/${Number(id)}`
    );
  }

  async listAll(params?: string) {
    const path = params ? `${this.path}?${params}&limit=50&page=1` : this.path;

    return await this.httpClient.getWithAuth<Promise<IGetChamados>>(`${path}`);
  }
  async listAllNoPag() {
    return await this.httpClient.getWithAuth<Promise<IChamado[]>>(
      `${this.path}`
    );
  }
}
export default new ChamadosService();
