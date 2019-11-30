import {JSDOM} from "jsdom";

export async function getMockProduct() {
  return await JSDOM.fragment(`<li class="product-item">
  <article
    class="hm-product-item"
    data-energy-interval=""
    data-articlecode="0633450004"
    data-category="men_jeans_slim"
    onclick="setOsaParameters(utag_data.category_id,'SMALL','0633450004'); setNotificationTicket('Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDYzMzQ1MF9ncm91cF8wMDRfdHJfdHI7MDYzMzQ1MDAwNF90cl90cjtPQkpFQ1RJVkUkO05PTkU6Tk9ORTsxOw','0633450004');"
    data-index="0"
  >
    <div class="image-container">
      <a
        href="/tr_tr/productpage.0633450004.html"
        title="Slim Straight Jeans"
        class="item-link"
      >
        <img
          src="//lp2.hm.com/hmgoepprod?set=source[/a2/2a/a22a5016b7d260582e8463c1b66f419b733ed404.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&amp;call=url[file:/product/main]"
          data-altimage="//lp2.hm.com/hmgoepprod?set=source[/a2/2a/a22a5016b7d260582e8463c1b66f419b733ed404.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&amp;call=url[file:/product/main]"
          class="item-image"
          alt="Slim Straight Jeans"
          data-alttext="Slim Straight JeansModel"
          data-src="//lp2.hm.com/hmgoepprod?set=source[/a2/2a/a22a5016b7d260582e8463c1b66f419b733ed404.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],hmver[1]&amp;call=url[file:/product/style]"
        />
        <div class="item-buttons">
          <button
            class="favorite icon-favorites js-favorite"
            data-tracking-type="event"
            data-tracking-json-template="utagFavorite"
            data-tracking-params="Favourites|0633450004|Slim Straight Jeans|MEN_SALE : VIEWALL_VIEWALL : VIEWALL_VIEW_ALL"
            data-saved-text="FAVORİLERE EKLENDİ"
            data-not-saved-text="FAVORİLERİME EKLE"
          >
            FAVORİLERİME EKLE
          </button>
        </div></a
      >
    </div>
    <div class="item-details">
      <h3 class="item-heading">
        <a class="link" href="/tr_tr/productpage.0633450004.html"
          >Slim Straight Jeans</a
        >
      </h3>
      <strong class="item-price">
        <span class="price sale">89,99 TL</span>
        <span class="price regular">149,00 TL</span>
      </strong>
      <ul class="list-swatches" data-swatches-total="2">
        <li class="item">
          <a
            href="/tr_tr/productpage.0633450001.html"
            class="swatch"
            style="background-color: #4C5164"
            title="Koyu kot mavisi"
          >
            Koyu kot mavisi</a
          >
        </li>
        <li class="item">
          <a
            href="/tr_tr/productpage.0633450004.html"
            class="swatch"
            style="background-color: #29282D"
            title="Siyah"
          >
            Siyah</a
          >
        </li>
      </ul>
    </div>
  </article>
</li>`).firstElementChild;
}
