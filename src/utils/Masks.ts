import { IExtraNCV } from "../services/ncv/ncv.service";

export const RgMask = (rg: string) => {
  const rgLimpo = rg.replace(/\D/g, "");
  let formattedRg = rgLimpo.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{1})$/,
    "$1.$2.$3-$4"
  );

  // Add logic to format the input as the user types
  if (rg.length <= 2) {
    formattedRg = rgLimpo.replace(/^(\d{2})/, "$1");
  } else if (rg.length <= 5) {
    formattedRg = rgLimpo.replace(/^(\d{2})(\d{3})/, "$1.$2");
  } else if (rg.length <= 8) {
    formattedRg = rgLimpo.replace(/^(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  }

  return formattedRg;
};

export const CpfMask = (cpf: string) => {
  const cpfLimpo = cpf.replace(/\D/g, "");
  let formattedCpf = cpfLimpo.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  // Add logic to format the input as the user types
  if (cpf.length <= 3) {
    formattedCpf = cpfLimpo.replace(/^(\d{3})/, "$1");
  } else if (cpf.length <= 6) {
    formattedCpf = cpfLimpo.replace(/^(\d{3})(\d{3})/, "$1.$2");
  } else if (cpf.length <= 9) {
    formattedCpf = cpfLimpo.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
  }

  return formattedCpf;
};
export const PhoneMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

export const ZipCodeMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};

export const FormatarCNH = (input: string) => {
  // Remove qualquer caractere que não seja um número
  const inputValue = input.replace(/\D/g, "");
  let formattedCNH = inputValue.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3.$4"
  );

  // Add logic to format the input as the user types
  if (input.length <= 3) {
    formattedCNH = inputValue.replace(/^(\d{3})/, "$1");
  } else if (input.length <= 6) {
    formattedCNH = inputValue.replace(/^(\d{3})(\d{3})/, "$1.$2");
  } else if (input.length <= 9) {
    formattedCNH = inputValue.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
  }

  return formattedCNH;
};

export const formatarCNPJ = (input: string) => {
  // Remove qualquer caractere que não seja um número
  const inputValue = input.replace(/\D/g, "");
  let formattedCNPJ = inputValue.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );

  // Add logic to format the input as the user types
  if (input.length <= 2) {
    formattedCNPJ = inputValue.replace(/^(\d{2})/, "$1");
  } else if (input.length <= 5) {
    formattedCNPJ = inputValue.replace(/^(\d{2})(\d{3})/, "$1.$2");
  } else if (input.length <= 8) {
    formattedCNPJ = inputValue.replace(/^(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  } else if (input.length <= 12) {
    formattedCNPJ = inputValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})/,
      "$1.$2.$3/$4"
    );
  }

  return formattedCNPJ;
};

export const FormatarReal = (input: string) => {
  // Remove qualquer caractere que não seja um número
  const inputValue = input.replace(/\D/g, "");

  // Adapte a lógica para formatar como reais (R$)
  let formattedReal = inputValue.replace(/(\d{1,})(\d{2})$/, "$1,$2");

  // Adicione lógica para formatar o input enquanto o usuário digita
  if (input.length > 2) {
    formattedReal = inputValue.replace(/(\d{1,})(\d{2})$/, "$1,$2");
  }

  // Adicione o símbolo de R$
  formattedReal = `R$ ${formattedReal}`;

  return formattedReal;
};

export const DesfazerMascaraReal = (formattedValue: string) => {
  const numericValue = formattedValue.replace(/[^\d,.]/g, "");

  const unmaskedValue = numericValue
    .replace(",", ".")
    .replace(/(\..*)\./g, "$1");

  return Math.round(parseFloat(unmaskedValue));
};

export const somarValores = (data: IExtraNCV[], target: string) => {
  if (!data && !target) return 0;

  const filteredData = data.filter((data) => data.type === target);

  return filteredData.reduce(
    (acumulador, objeto) => acumulador + DesfazerMascaraReal(objeto.valor),
    0
  );
};

export const gerarTotalApreensao = (
  diarias: number,
  estadia: number,
  guincho: number,
  desconto: number,
  acrescimo: number
) => diarias * estadia + guincho - desconto + acrescimo;
