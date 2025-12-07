export const NAIRA = '₦';

// ₦ 1,024
export const moneyFormat = (value?: number | string | null) => {
  const output = value ? Number(value).toLocaleString() : '0';
  return NAIRA + ' ' + output;
}