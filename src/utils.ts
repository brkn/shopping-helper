export function convertPriceToNumber(priceText: string) {
  const result = priceText.replace(",", ".");

  return Number(result.replace(/[^0-9.-]+/g, ""));
}

export function getDiscount(regularPrice: number, salePrice: number) {
  const discount = (regularPrice - salePrice) / regularPrice;

  return Math.round(discount * 100);
}
