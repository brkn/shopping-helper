/* import { readFileSync } from "fs";
import { resolve } from "path";


const html = readFileSync(resolve(__dirname, "../list.html"), "utf8");

console.log(html);
 */

import { getProductListElement } from "./get-data";

import { JSDOM } from "jsdom";

describe("getProductListElement", () => {
  beforeEach(async () => {
    const dom = await JSDOM.fromFile("list.html");
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
