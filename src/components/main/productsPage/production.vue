<template>
  <div class="production_part_filter" id="container">
    <article class="S-all-flex">
      <div class="S-all-flex box_select_search">
        <select name="" id="selected_filter_price">
          <option value="" selected>مرتب سازی بر اساس : پربازدید ترین</option>
          <option value="">مرتب سازی بر اساس : ارزان ترین</option>
          <option value="">مرتب سازی بر اساس : گران ترین</option>
          <option value="" >مرتب سازی بر اساس : پرفروش ترین</option>
          <option value="">مرتب سازی بر اساس : جدید ترین</option>
          <option value="">مرتب سازی بر اساس : ویژه</option>
        </select>
        <!-- <span @click="sortFilter('top_sales')">ads</span> -->
        <div class="S-all-flex box_find_search_products">
          <input
            class="find_products"
            v-model="title"
            placeholder="جستجو کنید..."
            @keypress.enter="searchtarget()"
          />
          <button class="btn_search_products" @click="searchtarget()">
            جستجو
          </button>
        </div>
      </div>
      <div class="S-all-flex all_squares_change_size">
        <a @click="changecolormenu()" v-on:click="toggleReverse()">
          <img
            src="https://s6.uupload.ir/files/icons8-squared-menu-24_y13a.png"
            alt=""
            id="imagesquredmenu"
          />
          <img
            src="https://s6.uupload.ir/files/icons8-squared-menu-24_(1)_9yv.png"
            alt=""
            id="imagesquredmenured"
          />
        </a>
        <a @click="changecolormenuanother()" v-on:click="toggle()">
          <img
            src="https://s6.uupload.ir/files/icons8-four-squares-24_(1)_409j.png"
            alt=""
            id="imagefoursquredmenu"
          />
          <img
            src="https://s6.uupload.ir/files/icons8-four-squares-24_(2)_v8x2.png"
            alt=""
            id="imagefoursquredmenured"
          />
        </a>
      </div>
    </article>
    <template v-if="products">
      <article class="part_products_filter" v-if="!isHidden">
        <div
          class="box_product_filter"
          v-for="(item, index) in products.data"
          :key="index"
        >
          <router-link
            :to="`/ProductDetail/${item.id}/${item.slug}`"
            @click="gotop()"
          >
            <div class="add_to_basket">
              <button>مشاهده</button>
            </div>
          </router-link>
          <router-link
            :to="`/ProductDetail/${item.id}/${item.slug}`"
            @click="gotop()"
          >
            <div class="circle_off_price_product_filter">
              <h4>۳۵%</h4>
              <h4>تخفیف</h4>
            </div>
            <div class="box_image_zoom_hover">
              <img :src="item.major_image.conversions.lg" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </router-link>
          <div class="box_price_product_filter S-margin-auto-reg S-all-flex">
            <span>{{ item.price }}</span>
            <span>تومان</span>
          </div>
        </div>
      </article>
    </template>
    <article class="part_products_filter_tablet" v-if="isHidden">
      <div
        class="box_product_filter"
        v-for="(item, index) in products.data"
        :key="index"
      >
        <router-link to="/Products/ProductDetail">
          <div class="circle_off_price_product_filter">
            <h4>۳۵%</h4>
            <h4>تخفیف</h4>
          </div>
          <div class="box_image_zoom_hover">
            <img :src="item.major_image.conversions.lg" alt="" />
          </div>
          <p>{{ item.title }}</p>
        </router-link>
        <div class="box_price_product_filter S-margin-auto-reg S-all-flex">
          <span>{{ item.price }}</span>
          <span>تومان</span>
          <!-- <p v-for="(item, index) in listid.data" :key="index">{{ item.id }}</p> -->
        </div>
      </div>
    </article>
    <!-- pagination part -->
    <section v-if="products">
      <paginate
        :page-count="products.last_page"
        :initial-page="products.current_page ?? 1"
        :page-range="3"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :classes="bootstrapPaginationClasses"
      >
      </paginate>
    </section>
    <!-- loader part -->
    <loader v-if="loaderFlag" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed, ref, watch } from "vue";
import loader from "../loader.vue";
import Paginate from "vuejs-paginate-next";
let self;
export default {
  name: "NovincharmProduction",
  components: { loader, Paginate },
  created() {
    self = this;
  },
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    changecolormenu() {
      document.getElementById("imagesquredmenu").style = "display:none";
      document.getElementById("imagesquredmenured").style = "display:block";
      document.getElementById("imagefoursquredmenu").style =
        "display:block;bottom:5px;position:relative";
      document.getElementById("imagefoursquredmenured").style = "display:none";
    },
    changecolormenuanother() {
      document.getElementById("imagesquredmenu").style =
        "display:block;bottom:5px;position:relative";
      document.getElementById("imagesquredmenured").style = "display:none";
      document.getElementById("imagefoursquredmenu").style = "display:none";
      document.getElementById("imagefoursquredmenured").style = "display:block";
    },
    gotop() {
      window.scrollTo({ top: 0 });
    },
  },
  setup() {
    const store = useStore();
    let isHidden = ref(false);
    // part show products
    onMounted(() => {
      getProducts();
      watch(products, (newVal) => {
        if (newVal) {
          loaderFlag.value = false;
        }
      });
    });
    let filter = ref({ page: "", search: "" });
    let products = computed(() => {
      return store.getters.getProducts;
    });
    function getProducts() {
      store.dispatch("fetchProductsFromServer", getFilter());
    }
    // part search
    let title = ref("");
    function searchtarget() {
      store.commit("setTitle", title.value);
      store.dispatch("fetchTitle");
      loaderFlag.value = true;
    }
    let loaderFlag = ref(true);
    // part pagination
    function getFilter() {
      filter.value.page = self.$route.query.page ?? 1;
      filter.value.search = self.$route.query.search ?? "";
      return filter.value;
    }
    // part page number products
    function clickCallback(pageNum) {
      self.$router.push(`/Products?page=${pageNum}`).then(() => {
        document
          .getElementById("container")
          .scrollIntoView({ behavior: "smooth" });
        loaderFlag.value = true;
        getProducts();
      });
    }
    // part filters products
    function sortFilter(value){
      store.commit("setSortName" , value);
      store.commit("fetchTitle");
      loaderFlag.value = true;
    }
    // part change size img products
    function toggle() {
      if (isHidden) {
        isHidden.value = true;
      }
    }
    function toggleReverse(){
      if (isHidden) {
        isHidden.value = false;
      }
    }
    return {
      searchtarget,
      products,
      title,
      getProducts,
      loaderFlag,
      clickCallback,
      isHidden,
      toggle,
      toggleReverse,
      sortFilter
    };
  },
};
</script>

<style>
.production_part_filter {
  width: 900px;
  margin-right: 3rem;
  margin-top: 1.5rem;
}

.production_part_filter #selected_filter_price {
  width: 280px;
  padding: 0.5rem;
  border: 1.5px solid black;
  outline: none;
  color: #58595b;
  background-image: url("https://s6.uupload.ir/files/icons8-sort-down-24_(1)_2u81.png");
  background-repeat: no-repeat;
  background-position: left;
}

.production_part_filter select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

.part_products_filter {
  width: 100%;
  display: grid;
  margin-top: 2.5rem;
  gap: 20px;
  padding-bottom: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.part_products_filter_tablet {
  width: 100%;
  display: grid;
  margin-top: 2.5rem;
  gap: 15px;
  padding-bottom: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.part_products_filter_tablet .box_product_filter {
  width: 419.5px;
  position: relative;
}

.box_product_filter {
  width: 270px;
  position: relative;
}

.box_product_filter:hover .add_to_basket {
  display: block;
}

.box_product_filter .add_to_basket {
  position: absolute;
  display: none;
  z-index: 900;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  top: 69%;
}

.add_to_basket button {
  width: 100%;
  padding: 1rem;
  background-color: #EB1C23;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
}

.box_product_filter .box_image_zoom_hover {
  position: relative;
  margin: auto;
  overflow: hidden;
  border-bottom: 4px solid transparent;
}
/* 
.box_product_filter:hover .box_image_zoom_hover {
  transition: 0.5s all ease-in-out;
  border-bottom: 4px solid red;
  position: relative;
} */

.box_product_filter:hover img {
  transform: scale(1.1);
  transition: 1.5s all ease-in-out;
}

.box_price_product_filter {
  width: 85px;
}

.box_price_product_filter span:nth-child(1) {
  color: #eb053b;
  font-weight: bolder;
}

.box_price_product_filter span:nth-child(2) {
  color: #666d74;
}

.box_product_filter img {
  width: 100%;
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  height: auto;
  transform: scale(1);
}

.box_product_filter p {
  color: #58595b;
  font-size: medium;
  text-align: center;
  font-weight: bolder;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}

.box_product_filter p:hover {
  color: red;
  transition: 0.5s all ease-in-out;
}

.box_product_filter .circle_off_price_product_filter {
  position: absolute;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  background-color: #eb1c23;
  width: 50px;
  z-index: 2;
  height: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding-top: 10px;
  line-height: 1.2;
}

.box_product_filter .circle_off_price_product_filter h4 {
  color: white;
}

#imagesquredmenured,
#imagefoursquredmenured {
  display: none;
  position: relative;
  bottom: 5px;
}

.box_select_search {
  width: 640px;
}

.box_find_search_products {
  width: 390px;
}

.find_products {
  width: 270px;
  background-color: #fff;
  margin: 0 auto;
  padding: 0.5rem;
  border: 1.5px solid black;
  outline: none;
  color: #58595b;
}

.btn_search_products {
  padding: 0.6rem;
  background: #eb1c23;
  color: white;
  cursor: pointer;
}

.btn_search_products:hover {
  background: red;
  transition: 0.3s all;
}

.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  padding-bottom: 4rem;
  align-items: center;
  justify-content: center;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff !important;
  background-color: #007bff;
  border-color: #007bff;
  box-shadow: -5px 5px 5px lightgray;
}

.page-link:not(:disabled):not(.disabled) {
  cursor: pointer;
  border: 1px solid gray;
}

.page-link {
  color: #007bff !important;
  font-weight: bolder;
  position: relative;
  display: block;
  padding: 0.7rem 0.9rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  background-color: lightgray;
  transition: 0.5s all;
}

.active {
  color: red;
  border-bottom: 2.3px solid transparent;
}

.all_squares_change_size img{
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  #imagesquredmenu,
  #imagefoursquredmenu {
    display: none;
  }
}
</style>
