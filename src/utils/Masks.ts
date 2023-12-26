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
  let formattedCNH = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4");

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
  let formattedCNPJ = inputValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

  // Add logic to format the input as the user types
  if (input.length <= 2) {
    formattedCNPJ = inputValue.replace(/^(\d{2})/, "$1");
  } else if (input.length <= 5) {
    formattedCNPJ = inputValue.replace(/^(\d{2})(\d{3})/, "$1.$2");
  } else if (input.length <= 8) {
    formattedCNPJ = inputValue.replace(/^(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  } else if (input.length <= 12) {
    formattedCNPJ = inputValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4");
  }

  return formattedCNPJ;
};



