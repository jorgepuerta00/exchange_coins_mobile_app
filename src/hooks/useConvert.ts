export const convertCurrencies = (quantity: number, rateFrom: number, rateTo: number) => {
  const rateBaseEUR: number = quantity / rateFrom;
  const result = rateBaseEUR * rateTo;
  return Number(result.toFixed(2));
}

export function currencyFormat(num: number, scale: number) {
  return num.toFixed(scale).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}