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

    // TODO: move  this to create element function
    // This should be the created element, could be useful at test:
    // <span class="price discount">50%</span>
    const discountElement = document.createElement("span");
    const priceText = document.createTextNode(`%${getDiscount(prices.regularPrice, prices.salePrice)}`);
    discountElement.setAttribute("class", "price discount");
    // TODO: instead of appendChild, use insertBefore
    discountElement.appendChild(priceText);


    const itemPriceElement = child.querySelector("strong.item-price");

    if (itemPriceElement) {
      itemPriceElement.appendChild(discountElement);
    }
  }
}
