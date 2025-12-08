export const NAIRA = '₦';

// ₦ 1,024
export const moneyFormat = (value?: number | string | null) => {
  const output = value ? Number(value).toLocaleString() : '0';
  return NAIRA + ' ' + output;
}

export const sleep = (secs = 3): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));