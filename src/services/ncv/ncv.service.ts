import HttpClient from "../HttpClient";

export interface INCVResponse {
  id: 7;
  cor: "Branca";
  marca: "CHEVROLET";
  modelo: " AGILE LTZ";
  placa: "OKL7574";
  ano: "2013";
  municipio: "SALVADOR";
  uf: "BA";
  km: "58";
  chassi: "8AGCN48X0DR110376";
  motor: "CSB530808";
  kmFotos: ["/files/29a08f64b087253e151f228fbccb054b-photo.jpg"];
  combustivelFotos: ["/files/01aa87cd038d6a19f774d2d415f8c4a6-photo.jpg"];
  created_at: "2024-01-01T15:28:49.387Z";
  updated_at: "2024-01-01T15:28:49.387Z";
  chamadoId: 25;
  avariasDescription: "tem vrias";
  apreensaoId: 7;
  acessoriosId: 7;
  complementoId: 7;
  motoristaId: 8;
  status: string;

  Chamado: IChamado;
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
  kmFotos: string;
  combustivelFotos: string;
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
  async listOne(id?: string) {
    return await this.httpClient.get<Promise<INCVResponse>>(
      `${this.path}/${Number(id)}`
    );
  }

  async listAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<INCVResponse[]>>(
      `${this.path}${params}`
    );
  }
}
export default new NcvService();
