import { ReactNode } from "react";
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
  createdAt:  string,
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
  createdAt:  string,
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
  startAt: string,
  endAt: string,
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
  label: ReactNode;
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
  createdAt:  string,
  inicio_contrato: Date | null;
  fim_contrato: Date | null;
  vencimento_seguro: Date | null;
  pdf_seguro: string;
  pdf_vistoria_checklist: string;
  startAt: string,
  endAt: string,
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
  patioDocs: string,
  observacaoDoc: string,
  documentos: {
    patioDocs: string,
    startAt: string,
    endAt: string,
    observacaoDoc: string,
    pdf_contrato: string;
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

  async listAll(params?: string) {
    return await this.httpClient.getWithAuth<Promise<IPatio[]>>(
      `${this.path}${params}`
    );
  }
}
export default new PatiosService();
