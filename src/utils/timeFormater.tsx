import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const TimeFormatter = (time: string, withTimeZone = false) => {
  if (withTimeZone) return dayjs(time).utcOffset(-3).format("DD/MM/YYYY HH:mm:ss");
  return dayjs(time).utcOffset(-3).format("DD/MM/YYYY");
};
