import HttpClient from "../HttpClient";

export interface IPatiosServiceDTO {
  id: number;
  nome: string;
  endereco: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  telefone: string;
  ativo: number;
  email: string;
  responsavel: string;
  observacao: string;
  info_liberacao: string;
  whatsapp: string;
  inicio_contrato: Date | null;
  fim_contrato: Date | null;
  vencimento_seguro: Date | null;
  pdf_seguro: string;
  pdf_contrato: string;
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
}
export default new PatiosService();
