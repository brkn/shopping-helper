import { convertPriceToNumber } from "./utils";

export function getProductListElement() {
  return document.querySelector<HTMLUListElement>(
    "main.segments > div.sidebar-plus-content > div.page-content > div.main > div:nth-child(6) > ul.products-listing"
  );
}

/**
 * @param product: <li class="product-item">
 */
export function getProductPrice(product: HTMLLIElement) {
  const prices = product.querySelector(
    "article.hm-product-item > div.item-details > strong.item-price"
  );

  if (!prices) {
    throw new Error(
      `Prices for this product cant be found: ${product.innerHTML}`
    );
  }

  const salePrice = (prices.querySelector(".sale") as HTMLSpanElement)
    .innerText;
  const regularPrice = (prices.querySelector(".regular") as HTMLSpanElement)
    .innerText;

  return {
    salePrice: convertPriceToNumber(salePrice),
    regularPrice: convertPriceToNumber(regularPrice)
  };
}
