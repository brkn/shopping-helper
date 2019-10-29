export function convertPriceToNumber(priceText: string) {
  return Number(priceText.replace(/[^0-9\.\-]+/g, ""));
}
