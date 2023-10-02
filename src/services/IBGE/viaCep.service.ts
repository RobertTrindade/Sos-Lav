import axios from "axios";

export interface IViaCepReturnDto {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

class ViaCepService {
  constructor() {}

  async getDataByCep(cep: string): Promise<IViaCepReturnDto> {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/
      `
    );

    return data;
  }
}

export default new ViaCepService();
