import HttpClient from "../HttpClient";

export interface IPatiosResponse {
  nome:  string,
  email:  string,
  responsavel:  string,
  telefone:  string,
  observacao:  string,
  bairro:  string,
  cep:  string,
  cidade:  string,
  estado:  string,
  created_at:  string,
  longitude:  string,
  latitude:  string,
  endereco:  string,
  ativo: boolean,
  documentos: {
    patioDocs:  string,
    startAt:  string,
    endAt:  string,
    observacaoDoc:  string,
    pdf_contrato: string,
  },
}

export interface IPatiosServiceDTO {
  id: number;
  nome: string;
  endereco: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  telefone: string;
  ativo: boolean;
  email: string;
  responsavel: string;
  observacao: string;
  info_liberacao: string;
  whatsapp: string;
  inicio_contrato: Date | null;
  fim_contrato: Date | null;
  vencimento_seguro: Date | null;
  pdf_seguro: string;
  pdf_vistoria_checklist: string;
  data_cadastro: string;
  longitude: number | null;
  latitude: number | null;
  isento_taxas: string;
  id_bolsao: number | null;
  id_empresa: number;
  meta_apreensoes: number | null;
  meta_liberacoes: number | null;
  ponto_equilibrio: number | null;
  contrato: string | null;
  documentos: {
    patioDocs: string,
    startAt: string,
    endAt: string,
    observacaoDoc: string,
    pdf_contrato: string;
  };
}

export interface IPatio {
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
  label?: string;
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

class PatiosService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/patios";
  }

  async getPatios() {
    return await this.httpClient.get<Promise<IPatiosServiceDTO[]>>(this.path);
  }

  async createPatio(body: any) {
    return await this.httpClient.post<Promise<IPatiosResponse>>(
      `${this.path}`,
      body
    );
  }

  async listOne(id?: string) {
    return await this.httpClient.get<Promise<IPatio>>(
      `${this.path}/${Number(id)}`
    );
  }

  async editPatio(id: number, body: any) {
    return await this.httpClient.post<Promise<IPatiosServiceDTO>>(
      `${this.path}/documentos/${id}`,
      body
    );
  }
}
export default new PatiosService();
