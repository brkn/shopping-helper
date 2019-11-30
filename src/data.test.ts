import {JSDOM} from "jsdom";

import {
  getProductListElement,
  getProductPrice
} from "./data";
import {getMockProduct} from "./__mocks__/get-data";

describe("getProductListElement", () => {
  beforeAll(async () => {
    const dom = await JSDOM.fromFile("product-list.html");
    (global as any).document = dom.window.document;
  });

  test("initially returns a ul list with 36 children elements", () => {
    const list = getProductListElement();
    expect(document).toBeTruthy();
    expect(list).not.toBeNull();
    if (list) {
      expect(list.childElementCount).toEqual(36);
    }
  });
});

describe("getProductPrice", () => {
  let priceElement: HTMLLIElement;

  const mockPrices = {
    salePrice: 89.99,
    regularPrice: 149.0,
  };

  beforeEach(async () => {
    priceElement = (await getMockProduct()) as HTMLLIElement;
  });

  test("should work with example mock element", () => {
    expect(getProductPrice(priceElement as HTMLLIElement)).toEqual(mockPrices);
  });
});
