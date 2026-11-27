import { format, formatRelative, isAfter, subDays } from "date-fns";
import { uk } from "date-fns/locale";

export function getDate(date: string | Date) {
  const targetDate = new Date(date);
  const now = new Date();
  const localeOption = { locale: uk };

  if (isAfter(targetDate, subDays(now, 7)) && !isAfter(targetDate, now)) {
    return formatRelative(targetDate, now, localeOption).split(" о ")[0];
  }
  const dateTemplate =
    targetDate.getFullYear() === now.getFullYear()
      ? "dd MMMM"
      : "d MMMM y 'року'";

  return format(targetDate, dateTemplate, localeOption);
}
