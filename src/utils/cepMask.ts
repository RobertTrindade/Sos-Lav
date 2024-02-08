export const cepMask = (cep: string): string => {
  // Remove todos os caracteres não numéricos do CEP
  const cleanedCEP = cep.replace(/\D/g, "");

  // Verifica se o CEP tem pelo menos 5 dígitos
  if (cleanedCEP.length >= 5) {
    // Formata o CEP com a máscara "XXXXX-XXX"
    return (
      cleanedCEP.slice(0, 5) +
      (cleanedCEP.slice(5) ? "-" + cleanedCEP.slice(5) : "")
    );
  }

  // Se o CEP não tiver 5 dígitos, retorna o valor original
  return cleanedCEP;
};
