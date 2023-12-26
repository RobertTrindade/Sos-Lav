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
  motoristaName?: string;
  chamadorName: string;
  localizacaoName: string;

  Aceite?: {
    tempoEstimado: string;
    kmsEstimado: number;
    aceiteHora: string;
    Motoristas: {
      name: string;
      latitude: string;
      longitude: string;
    };
  }[];

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
    return await this.httpClient.get<Promise<IChamado>>(
      `${this.path}/${Number(id)}`
    );
  }

  async listAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<IChamado[]>>(
      `${this.path}${params}`
    );
  }
}
export default new ChamadosService();
