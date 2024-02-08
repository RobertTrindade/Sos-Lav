import dayjs from "dayjs";

export const calcularDiasPassados = (data: string) =>
  data ? dayjs().diff(dayjs(data), "day") : 0;
