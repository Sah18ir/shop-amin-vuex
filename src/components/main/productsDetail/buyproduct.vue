<template>
  <div v-if="product">
    <div class="product_datail_page">
      <article class="part_address_site title_product_datail_page">
        <router-link to="/" class="S-all-flex">
          <h5>صفحه اصلی / جزئیات محصول / زنانه / پوشاک /</h5>
          <h5 class="title_product_datail_page" v-if="product">
            {{ product.title }}
          </h5>
        </router-link>
      </article>
      <article class="part_buy_size_datail_product">
        <template v-if="product">
          <div class="image_zoom_product_detail">
            <div class="circle_off_price_product_filter">
              <h4>۳۵%</h4>
              <h4>تخفیف</h4>
            </div>
            <div class="wrapper">
              <img :src="product.major_image.conversions.lg" />
              <div class="left"></div>
            </div>
          </div>
        </template>
        <template v-if="product">
          <div class="detail_part_buy_product_detail">
            <h5 class="title_part_buy_product">{{ product.title }}</h5>
            <h2>{{ product.title }}</h2>
            <div class="its_here_product_detail">
              <h5>موجود</h5>
            </div>
            <div class="S-all-flex S-mar-top-ten">
              <div class="price_and_off_product_detail S-all-flex">
                <h3>{{ product.off }}</h3>
                <h3>{{ product.price }}</h3>
                <span>تومان</span>
              </div>
              <div class="rate_product_product_detail">
                <img
                  v-for="(item, index) in ratestars"
                  :key="index"
                  :src="item.image"
                  alt="خوب"
                />
                <router-link to="/">
                  <h5>ارسال نظر</h5>
                </router-link>
              </div>
            </div>
            <form class="S-all-flex">
              <select name="" id="selected_filter_price">
                <option value="" selected>سرمه ای</option>
                <option value="">زرشکی</option>
                <option value="">عسلی</option>
                <option value="">مشکی</option>
                <option value="">قهوه ای</option>
              </select>
              <select name="" id="selected_filter_price">
                <option value="" selected>1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <select name="" id="selected_filter_price">
                <option value="" selected>L</option>
                <option value="">S</option>
                <option value="">XXL</option>
              </select>
            </form>
            <button class="add_basket_product_detail" @click="addToCart()">
              <div class="S-all-flex">
                <img
                  src="https://s6.uupload.ir/files/icons8-basket-24_(1)_bbsy.png"
                  alt=""
                />
                <h3>افزودن به سبد خرید</h3>
              </div>
            </button>
            <router-link to="/">
              <div class="S-all-flex add_to_favorite_product_detail">
                <div class="S-all-flex">
                  <img
                    src="https://s6.uupload.ir/files/icons8-heart-32_lpll.png"
                    alt=""
                  />
                  <h5>افزودن به علاقمندی ها</h5>
                </div>
                <div class="S-all-flex">
                  <img
                    v-for="(item, index) in socialproducts"
                    :key="index"
                    :src="item.image"
                    alt=""
                  />
                </div>
              </div>
            </router-link>
            <div class="S-mar-top-reg-mine"></div>
            <details>
              <summary>سایر توضیحات</summary>
              <p>
                کاپشن چرم مردانه نوین‌چرم مدل MNT5288 ساخته شده از بهترین نوع
                چرم و مناسب افراد خوش‌سلیقه است. این کاپشن در رنگ‌های دیگری
                همچون عسلی و قهوه‌ای برای کسانی که دوست دارند استایلی با رنگ‌های
                روشن داشته باشند موجود است. توصیه می‌کنیم این کاپشن چرم مشکی رنگ
                را در فصل زمستان با دستکش چرم مشکی و بوت چرم مشکی مردانه ست
                کنید. ست چرم مشکی می‌تواند استایلی بسیار جذاب و شیک به شما دهد.
                همه می‌دانیم استایل چرم مشکی هیچگاه قدیمی نشده و لذا با خرید
                کاپشن چرم با جنس عالی می‌توانید تا سالها از این کاپشن استفاده
                نمائید.
              </p>
            </details>
            <details>
              <summary>مشخصات</summary>
              <p>
                کاپشن چرم مردانه نوین‌چرم مدل MNT5288 ساخته شده از بهترین نوع
                چرم و مناسب افراد خوش‌سلیقه است. این کاپشن در رنگ‌های دیگری
                همچون عسلی و قهوه‌ای برای کسانی که دوست دارند استایلی با رنگ‌های
                روشن داشته باشند موجود است. توصیه می‌کنیم این کاپشن چرم مشکی رنگ
                را در فصل زمستان با دستکش چرم مشکی و بوت چرم مشکی مردانه ست
                کنید. ست چرم مشکی می‌تواند استایلی بسیار جذاب و شیک به شما دهد.
                همه می‌دانیم استایل چرم مشکی هیچگاه قدیمی نشده و لذا با خرید
                کاپشن چرم با جنس عالی می‌توانید تا سالها از این کاپشن استفاده
                نمائید.
              </p>
            </details>
          </div>
        </template>
      </article>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
let self;
export default {
  name: "NovincharmBuyproduct",
  created() {
    self = this;
  },
  data() {
    return {
      showModal: false,
      product: null,
      ratestars: [
        {
          image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
        },
      ],
      socialproducts: [
        {
          image: "https://s6.uupload.ir/files/icons8-mail-24_(1)_20i7.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-twitter-30_mp8.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-pinterest-p-32_7608.png",
        },
        {
          image:
            "https://s6.uupload.ir/files/icons8-facebook-f-30_(2)_asgv.png",
        },
      ],
    };
  },

  methods: {},
  setup() {
    const store = useStore();
    // part product detail
    onMounted(() => {
      getProduct();
    });
    let product = computed(() => {
      return store.getters.getProduct;
    });
    function getProduct() {
      store.dispatch("fetchProductFromServer", self.$route.params.id);
    }
    function addToCart() {
      store.dispatch("addProductsToCart" , {
        product : product.value,
        quantity: 1
      });
    }
    return { product, getProduct, addToCart };
  },
};
</script>

<style>
.product_datail_page {
  width: 75%;
  margin: 2rem auto;
}

.product_datail_page .title_product_datail_page {
  color: #585e65;
}

.part_buy_size_datail_product {
  display: grid;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.part_buy_size_datail_product #selected_filter_price {
  width: 145px;
  padding: 0.5rem;
  padding-right: 0;
  margin-top: 3rem;
  padding-left: 0;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 15px;
}

.image_zoom_product_detail {
  position: relative;
}

.image_zoom_product_detail img {
  width: 545px;
  height: 726px;
}

.image_zoom_product_detail .circle_off_price_product_filter {
  position: absolute;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  right: 20px;
  top: 25px;
  background-color: #eb1c23;
  color: white;
  width: 85px;
  height: 85px;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  padding-top: 18px;
  line-height: 1.2;
}

.wrapper {
  display: flex;
  margin: 10px auto;
}

.left,
.right {
  flex: 1 1 auto;
  max-width: 50%;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left > img {
  width: 100%;
  height: auto;
  pointer-events: none;
}

.right {
  position: relative;
  overflow: hidden;
}

.inner {
  position: absolute;
  width: 170%;
  height: 170%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner > img {
  width: 100%;
  height: auto;
}

.detail_part_buy_product_detail {
  width: 470px;
  margin-top: 4rem;
  margin-right: 3rem;
  padding-bottom: 3rem;
}

.title_part_buy_product {
  color: gray;
  font-size: 15px;
  font-weight: lighter;
}

.detail_part_buy_product_detail h2 {
  margin-top: 1rem;
}

.its_here_product_detail {
  width: 47px;
  padding: 0.1rem;
  color: white;
  margin-top: 1rem;
  text-align: center;
  background: #39b54a;
  border-radius: 4px;
}

.its_here_product_detail h5 {
  font-weight: lighter;
}

.rate_product_product_detail img {
  width: 18px;
}

.rate_product_product_detail h5 {
  color: gray;
  font-weight: lighter;
}

.rate_product_product_detail h5:hover {
  color: red;
  transition: 0.4s all ease-in-out;
}

.price_and_off_product_detail h3:nth-child(1) {
  color: #58595b;
  font-weight: lighter;
  text-decoration: line-through;
}

.price_and_off_product_detail h3:nth-child(2) {
  color: #eb1c46;
  font-weight: lighter;
}

.add_basket_product_detail {
  width: 100%;
  padding: 0.8rem;
  margin-top: 4rem;
  cursor: pointer;
  text-align: center;
  background-color: #58595b;
}

.add_basket_product_detail:hover {
  background-color: #eb1c23;
  transition: 0.4s all ease-in-out;
}

.add_basket_product_detail h3 {
  font-weight: lighter;
}

.add_basket_product_detail img {
  width: 21px;
  height: 21px;
}

.add_basket_product_detail div {
  width: 145px;
  margin: 0 auto;
  color: white;
}

.add_to_favorite_product_detail {
  margin-top: 1rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.5px solid lightgray;
}

.add_to_favorite_product_detail:hover h5 {
  color: red;
  transition: 0.4s all ease-in-out;
}

.add_to_favorite_product_detail div:nth-child(2) {
  width: 120px;
}

.add_to_favorite_product_detail h5 {
  color: #58595b;
  font-weight: lighter;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
}

.add_to_favorite_product_detail img:nth-child(1) {
  width: 20px;
}

.add_to_favorite_product_detail img:nth-child(2) {
  width: 21px;
}

.add_to_favorite_product_detail img:nth-child(3) {
  width: 21px;
}

.add_to_favorite_product_detail img:nth-child(4) {
  width: 21px;
}

details {
  margin: 1rem auto;
  padding: 0 1rem;
  width: 35em;
  max-width: calc(100% - 2rem);
  position: relative;
  border: 1px solid #78909c;
  border-radius: 6px;
  background-color: transparent;
  color: #263238;
  transition: background-color 0.15s;
}
details > :last-child {
  margin-bottom: 1rem;
}
details::before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  opacity: 0.15;
  box-shadow: 0 0.25em 0.5em #263238;
  pointer-events: none;
  transition: opacity 0.2s;
  z-index: -1;
}
details[open] {
  background-color: #eceff1;
}
details[open]::before {
  opacity: 0.6;
}

details p {
  font-size: 0.9em;
}

summary {
  padding: 1rem 2em 1rem 0;
  display: block;
  position: relative;
  font-size: 1em;
  cursor: pointer;
}
summary::before,
summary::after {
  width: 0.75em;
  height: 2px;
  position: absolute;
  top: 50%;
  right: 0;
  content: "";
  background-color: currentColor;
  text-align: right;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;
}
summary::after {
  transform: translateY(-50%) rotate(90deg);
}
[open] summary::after {
  transform: translateY(-50%) rotate(180deg);
}
summary::-webkit-details-marker {
  display: none;
}

code {
  padding: 0.2em;
  border-radius: 3px;
  background-color: #e0e0e0;
}

pre > code {
  display: block;
  padding: 1em;
  margin: 0 auto;
}

.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

.modal-vue .modal {
  position: relative;
  width: 300px;
  z-index: 9999;
  margin: 0 auto;
  left: 80%;
  top: -51%;
  padding: 20px 30px;
  background-color: transparent;
}

.modal-vue .close {
  position: fixed;
  top: 10px;
  right: 10px;
}

.gallery_image_product_detail {
  display: flex;
  justify-content: left;
}

.gallery_image_product_detail img {
  width: 520px;
}

.close_modal_image {
  height: 50px;
  width: 50px;
  background: black;
  position: relative;
}
.close_modal_image:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "❌";
  font-size: 50px;
  color: white;
  line-height: 50px;
  text-align: center;
}

.small-x:after {
  content: "×";
}

.part_address_site {
  width: 330px;
}

@media screen and (max-width: 1000px) {
  .image_zoom_product_detail img {
    width: 350px;
    height: 500px;
  }
}
</style>
