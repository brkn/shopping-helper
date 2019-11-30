import {convertPriceToNumber} from "./utils";

export function getProductListElement() {
  const queryString =
    "main.segments > div.sidebar-plus-content > div.page-content > div.main > div:nth-child(6) > ul.products-listing";

  return document.querySelector<HTMLUListElement>(queryString);
}

/**
 * param product: <li class="product-item">
 */
export function getProductPrice(product: HTMLLIElement) {
  const prices = getPriceWrapperElement();

  if (!prices) {
    throw new Error(
      `Prices for this product cant be found: ${product.innerHTML}`
    );
  }

  const salePrice = getPriceValue("sale");
  const regularPrice = getPriceValue("regular");

  return {
    salePrice: convertPriceToNumber(salePrice),
    regularPrice: convertPriceToNumber(regularPrice),
  };

  function getPriceWrapperElement() {
    return product.querySelector(
      "article.hm-product-item > div.item-details > strong.item-price"
    );
  }

  function getPriceValue(priceType: "sale" | "regular") {
    return prices!.querySelector(`.${priceType}`)!.innerHTML;
  }
}
