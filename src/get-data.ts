export function getProductListElement() {
  return document.querySelector<HTMLUListElement>(
    "#main-content > div.sidebar-plus-content > div > div > div:nth-child(6) > ul"
  );
}
