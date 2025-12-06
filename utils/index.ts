import { format } from 'date-fns'

const NAIRA = '₦';

// 1,024
export const moneyFormat = (value?: number | string | null) => {
  const output = value ? Number(value).toLocaleString() : '0';
  return NAIRA +' '+ output;
}

// Jan 1, 1970 | 1:00 AM
export const dateFormat = (date?: Date | string | null) => {
  const d = date || new Date();
  return format(d, "MMM d, yyyy | h:mm a");
}