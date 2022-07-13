<template>
  <button>
    <!-- <div id="bigSidebar" class="bigsidenav"> -->
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <div class="S-width-pic S-all-flex">
        <img
          src="https://s6.uupload.ir/files/icons8-basket-24_(1)_iyr4.png"
          alt=""
          class="image_shopping_sidebar"
        />
        <div class="search_header">
          <img
            src="https://s6.uupload.ir/files/icons8-search-48_(2)_hlf5.png"
            alt=""
          />
        </div>
        <div class="login_register_header">
          <h5>ورود / عضویت</h5>
        </div>
      </div>
      <div class="number_shopping S-all-flex">
        <h2>سبد خرید</h2>
        <span class="basket-num">{{ getCartItemCount }}</span>
        <h4>نوع کالا</h4>
        <div class="clear_all_products_sidebar_cart">
          <button @click.prevent="clearCartItems()">حذف همه</button>
        </div>
      </div>
      <div class="show_basket_value">
        <img
          src="https://s6.uupload.ir/files/icons8-basket-96_sh5d.png"
          alt=""
          class="image_big_basket_sidenav_shopping"
        />
        <div
          v-for="item in cart"
          :key="item.product.id"
          class="showing_shopping_cart"
        >
          <img :src="item.product.major_image.conversions.lg" />
          <h4>{{ item.product.title }}</h4>
          <h3 class="S-all-flex">
            {{ item.product.price }}
            <h5>تومان</h5>
          </h3>
          <div class="S-all-flex box_number_remove_product">
            <h4>تعداد : {{ item.quantity }}</h4>
            <div
              class="remove_product_cart"
              @click.prevent="removeProductFromCart(item.product)"
            >
              <trash-icon />
            </div>
          </div>
        </div>
        <div class="go_shopping_btn">
          <button>
            <router-link to="/ShopCart">
              <h5>مشاهده سبد خرید</h5>
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <span style="font-size: 30px; cursor: pointer" @click="openNav()"
      ><div class="shopping_header">
        <img
          src="https://s6.uupload.ir/files/icons8-basket-24_(1)_iyr4.png"
          alt=""
        /></div
    ></span>
    <!-- </div> -->
  </button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import trashIcon from "../../assets/svg/trash-icon.vue";
let self;
export default {
  components: { trashIcon },
  name: "NovincharmShoppping",
  data() {
    return {
      cart: [],
    };
  },
  created() {
    self = this;
  },

  mounted() {},

  computed: {
    getCartItemCount() {
      return this.$store.getters.getCartItemCount;
    },
  },

  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "290px";
      // document.getElementById("bigSidebar").style.width = "100%";
      // document.getElementById("bigSidebar").style.background = "black";
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("bigSidebar").style.background = "transparent";
    },
  },
  setup() {
    const store = useStore();
    let cart = computed(() => {
      return store.state.cart;
    });
    function removeProductFromCart(product) {
      store.dispatch("removeProductFromCart", product);
    }
    function clearCartItems() {
      store.dispatch("clearCartItems");
    }
    return { cart, removeProductFromCart , clearCartItems };
  },
};
</script>

<style>
.shopping_header img {
  width: 20px;
  margin-top: 1.2rem;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
}

.sidenav .closebtn:hover {
  color: red !important;
  transition: 0.2s all ease-in-out;
}

.bigsidenav {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
}

.sidenav h2 {
  color: red;
  text-align: right;
  padding-right: 1rem;
  padding-top: 1rem;
  font-weight: lighter;
}

.sidenav span {
  margin-top: 1rem;
  width: 20px;
  height: 21px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  font-size: 12px;
  background-color: #58595b;
  color: white;
}

.image_shopping_sidebar {
  width: 20px;
  margin-right: 1rem;
}

.number_shopping {
  width: 230px;
}

.number_shopping h4 {
  margin-top: 1rem;
}

.go_shopping_btn {
  padding-bottom: 2rem;
}

.go_shopping_btn button {
  margin-top: 1.2rem;
  background-color: #58595b;
  font-weight: bolder;
}

.go_shopping_btn button h5 {
  color: white;
  margin-right: 1.2rem;
  font-size: 15px;
}

.go_shopping_btn button:hover {
  background-color: #eb1c23;
  transition: 0.8s ease;
}

.show_basket_value {
  margin-top: 2rem;
}

.show_basket_value h3 {
  color: #aaaaaa;
  font-weight: lighter;
}

.showing_shopping_cart img {
  width: 80px;
}

.showing_shopping_cart h5 {
  color: black;
}

.showing_shopping_cart h4 {
  font-size: 0.9rem;
}

.showing_shopping_cart h3 {
  color: fuchsia;
  font-weight: bold;
  width: 80px;
  margin: 0 auto;
}

.image_big_basket_sidenav_shopping {
  width: 80px;
}

.box_number_remove_product {
  width: 67px;
  margin: 0 auto;
}

.remove_product_cart {
  cursor: pointer;
  margin-top: 0.2rem;
}

.remove_product_cart svg {
  width: 19px;
}

.clear_all_products_sidebar_cart {
  margin-top: 1rem;
}

.clear_all_products_sidebar_cart button {
  background: #EB1C23;
  padding: 0.3rem;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}

.clear_all_products_sidebar_cart button:hover {
  background: red;
  transition: .5s all; 
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
