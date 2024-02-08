import HttpClient from "../HttpClient";
import { IMotoristaDto } from "../motoristas/motoristas.service";

export interface INCVResponse {
  id: 7;
  cor: string;
  marca: string;
  modelo: string;
  placa: string;
  ano: string;
  pdfDocumento: string;

  Motivos: string;
  municipio: string;
  uf: string;
  km: string;
  chassi: string;
  motor: string;
  kmFotos: string[];
  combustivelFotos: string[];
  created_at: string;
  updated_at: string;
  avariasDescription: string;
  status: string;
  Chamado: IChamado;
  Acessorios: IAcessorios;


  Extras: IExtraNCV[];
  Apreensao: IApreensao;
  Motoristas: IMotoristaDto;
  Complemento: IComplemento;
  Avarias: IAvarias[];

  Documentos: IDocs[];
}

export interface IApreensao {
  id: 10;
  chaves: boolean;
  blitz: boolean;
  guinchoColetivo: boolean;
  kmPercorrido: "12";
  adulterado: boolean;
  crimesTransito: boolean;
  motivoApreensao:string;
  emTela: true;
  foraCirculacao: true;
  judicial: true;
  leasing: boolean;
  motoQueixa: boolean;
  pedirBaixa: true;
  policiaCivil: boolean;
  traficoDrogas: boolean;
  rouboFurto: boolean;
  semDocumentosCrv: boolean;
  infracaoTransito: boolean;

  Valorpedagio:number;
  ValorExtra : number;

  created_at: string;
  updated_at: string;
}

export interface IChamado {
  id: number;
  createAt: string;
  updatedAt: string;
  equipamentoSolicitado: string;
  tipoVeiculo: string;
  tipoApreensao: string;
  patioId: number;
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
  Motivo: string;
  localizacaoName: string;

  Aceite?: {
    tempoEstimado: string;
    finalizacaoHora: string;
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
  Ncv: INCVResponse[];
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

export interface IExtraNCV {
  id: number;
  valor: string;
  observacao: string;
  type: string;
}

export interface IComplemento {
  id: 5;
  pintura: string;
  tapecaria: string;
  pneus: string;
  chaveVeiculo: boolean;
  veiculoTrancado: boolean;
  Avaria: string;
  created_at: string;
  updated_at: string;
}

export interface IAcessorios {
  id: 5;

  cambioAutomatico: boolean;
  rodaLigaLeve: boolean;
  somEspecial: boolean;
  tetoSolar: boolean;
  multimidia: boolean;
  documento: boolean;
  created_at: string;
  updated_at: string;
  rodaEspecial: boolean
}
export interface IAvarias {
  id: number;
  fotos: string[];
  ncvId: number;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface IDocs {
  id: 2;
  tipo: string;
  detalhes: string;
  file: string;
  ncvId: 50;
}

export interface IDocsUpload {
  tipo: string;
  detalhes: string;
  file: string;
}

class NcvService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/ncv";
  }

  async createChamado(body: any) {
    return await this.httpClient.post<Promise<INCVResponse>>(
      `${this.path}`,
      body
    );
  }
  async listOne(id?: string, revalidate?: number) {
    return await this.httpClient.get<Promise<INCVResponse>>(
      `${this.path}/${Number(id)}`,
      revalidate
    );
  }
  async editNcv(id: number, body: any) {
    return await this.httpClient.put<Promise<INCVResponse>>(
      `${this.path}/${id}`,
      body
    );
  }

  async uploadDocsNcv(id: number, body: IDocsUpload) {
    return await this.httpClient.post<Promise<IDocs>>(
      `${this.path}/documentos/${id}`,
      body
    );
  }
  async listAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<INCVResponse[]>>(
      `${this.path}${params}`
    );
  }

  async createExtra(params: number, body: any) {
    return await this.httpClient.post(`${this.path}/extras/${params}`, body);
  }
}

export default new NcvService();
