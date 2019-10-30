export function convertPriceToNumber(priceText: string) {
  let result = priceText.replace(",", ".");
  
  return Number(result.replace(/[^0-9\.\-]+/g, ""));
}
