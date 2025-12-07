import { format } from 'date-fns'

export const NAIRA = '₦';

// ₦ 1,024
export const moneyFormat = (value?: number | string | null) => {
  const output = value ? Number(value).toLocaleString() : '0';
  return NAIRA + ' ' + output;
}

// Sun, Jan 1, 1970
export const longDateFormat = (date?: Date | string | null) => {
  const d = date || new Date();
  return format(d, "EEE, MMM d, yyyy");
}

// Jan 1, 1970 | 1:00 AM
export const dateTimeFormat = (date?: Date | string | null) => {
  const d = date || new Date();
  return format(d, "MMM d, yyyy | h:mm a");
}