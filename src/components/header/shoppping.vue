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
        <span class="basket-num">۰</span>
      </div>
      <div class="show_basket_value">
        <img
          src="https://s6.uupload.ir/files/icons8-basket-96_sh5d.png"
          alt=""
        />
        <template v-if="product">
          <div v-for="(item, index) in cart" :key="index">
            <h4>{{ item.product.title }}</h4>
            <!-- <h3>{{ item.product.quantity }} x {{ item.product.price }}</h3> -->
            <!-- <span>تومان</span> -->
            <!-- <img :src="cart.product.major_image.conversions.lg" /> -->
          </div>
        </template>
        <div class="go_shopping_btn">
          <button>
            <router-link to="/">
              <h5>رفتن به فروشگاه آنلاین</h5>
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
let self;
export default {
  name: "NovincharmShoppping",
  data() {
    return {
      cart: [],
      product: null,
      products: [],
    };
  },
  created() {
    self = this;
  },

  mounted() {},

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
    return { cart };
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
  width: 120px;
}

.go_shopping_btn button {
  background-color: #58595b;
  margin-top: 1.2rem;
}

.go_shopping_btn button h5 {
  color: white;
  font-weight: lighter;
  margin-right: 1.2rem;
  font-size: 15px;
}

.show_basket_value {
  margin-top: 2rem;
}

.show_basket_value h3 {
  color: #aaaaaa;
  font-weight: lighter;
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
