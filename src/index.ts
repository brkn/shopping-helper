import {
  getProductListElement,
  getProductPrice
} from "./data";
import {getDiscount} from "./utils";

const productListElement = getProductListElement();
console.log(productListElement);

if (productListElement) {
  const {children} = productListElement;

  for (let i = 0; i < children.length; i += 1) {
    const child = children[i] as HTMLLIElement;
    const prices = getProductPrice(child);

    console.log(getDiscount(prices.regularPrice, prices.salePrice));
  }
}
