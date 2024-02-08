export const TimeFormatter = (time: string, withTimeZone = false) => {
  const dataObj = new Date(time);
  const dia = String(dataObj.getUTCDate()).padStart(2, "0");
  const mes = String(dataObj.getUTCMonth() + 1).padStart(2, "0");
  const ano = dataObj.getUTCFullYear();
  const hora = String(dataObj.getUTCHours()).padStart(2, "0");
  const minutos = String(dataObj.getUTCMinutes()).padStart(2, "0");

  return withTimeZone
    ? `${dia}/${mes}/${ano} ${hora}:${minutos}`
    : `${dia}/${mes}/${ano}`;
};
