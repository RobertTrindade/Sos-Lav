import axios from "axios";

export interface IIbgeResponseDto {
  data: IIbgeDto;
}

export interface IIbgeDto {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}
export interface IIbgeReturnDto {
  id: number;
  label: string;
  uf  : string;
}

class IbgeService {
  constructor() {}

  async getCities(uf: string): Promise<IIbgeReturnDto[]> {
    const { data } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos?orderBy=nome`
    );

    return data.map((item: IIbgeDto) => ({
      label: item.nome,
      id: item.id,
      uf: item.sigla,
    }));
  }

  async getStates(): Promise<IIbgeReturnDto[]> {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    return data.map((item: IIbgeDto) => ({
      label: item.nome,
      id: item.id,
      uf: item.sigla,
    }));
  }
}

export default new IbgeService();
