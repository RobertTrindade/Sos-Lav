import { INewValue } from "@/src/shared/components/AutoComplete";
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
  Motoristas: {
    name: string;
  };
  updatedAt: string;
  equipamentoSolicitado: string | INewValue;
  tipoVeiculo: string | INewValue;
  tipoApreensao: string | INewValue;
  patioId: number;
  status: string | INewValue;
  detalhes: string;
  urgencia: string | INewValue;
  origem: string | INewValue;
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
  Ncv: INCV[];
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

export interface INCV {
  id: 5;
  cor: string;
  marca: string;
  modelo: string;
  placa: string;
  ano: string;
  municipio: string;
  uf: string;
  km: string;
  chassi: string;
  motor: string;
  kmFotos: string[];
  combustivelFotos: string[];
  avariasDescription: string;

  Acessorios: {
    id: 5;
    arCondicionado: boolean;
    vidroEletrico: boolean;
    cambioManual: boolean;
    cambioAutomatico: boolean;
    radioCd: boolean;
    pneuStep: boolean;
    rodaComum: boolean;
    rodaEspecial: boolean;
    calotas: boolean;
    antena: boolean;
    documento: boolean;
    carroFuncionando: boolean;
    created_at: string;
    updated_at: string;
  };
  Apreensao: {
    id: 5;
    chaves: boolean;
    blitz: boolean;
    guinchoColetivo: boolean;
    kmPercorrido: string;
    adulterado: boolean;
    crimesTransito: boolean;
    emTela: boolean;
    foraCirculacao: boolean;
    judicial: boolean;
    leasing: boolean;
    motoQueixa: boolean;
    pedirBaixa: boolean;
    policiaCivil: boolean;
    traficoDrogas: boolean;
    rouboFurto: boolean;
    semDocumentosCrv: boolean;
    infracaoTransito: boolean;
    created_at: string;
    updated_at: string;
  };
  Avarias: {
    id: 31;
    fotos: string[];
    ncvId: 5;
    type: string;
    created_at: string;
    updated_at: string;
  }[];

  Complemento: {
    id: 5;
    pintura: string;
    tapecaria: string;
    pneus: string;
    created_at: string;
    updated_at: string;
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
  async editChamado(id: number, body: any) {
    return await this.httpClient.patch<Promise<IChamado>>(
      `${this.path}/${id}`,
      body
    );
  }

  async listAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<IChamado[]>>(
      `${this.path}${params}`
    );
  }
}
export default new ChamadosService();
