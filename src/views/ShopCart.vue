<template>
  <div class="container_cart_shopping S-all-flex">
    <div v-for="item in cart" :key="item.product.id">
      <img :src="item.product.major_image.conversions.lg" />
      <h4>{{ item.product.title }}</h4>
      <h3>{{ item.product.price }} <span>تومان</span></h3>
      <div class="S-all-flex box_number_remove_product">
        <h5>تعداد : {{ item.quantity }}</h5>
        <div
          class="remove_product_cart"
          @click.prevent="removeProductFromCart(item.product)"
        >
          <trash-icon />
        </div>
      </div>
    </div>
  </div>
  <div class="S-all-flex type_number">
    <span>{{ getCartItemCount }}</span>
    <h3>نوع کالا</h3>
  </div>
  <div class="clear_all_products">
    <button @click.prevent="clearCartItems()">حذف همه کالا ها</button>
  </div>
  <div class="S-all-flex all_price_pos">
    <h3>مجموع قیمت ها:</h3>
    <h3>{{ getCartTotalPrice }} <span>تومان</span></h3>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import trashIcon from "../assets/svg/trash-icon.vue";
let self;
export default {
  components: { trashIcon },
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
    getCartTotalPrice() {
      return this.$store.getters.getCartTotalPrice;
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
    return { cart, removeProductFromCart, clearCartItems };
  },
};
</script>
<style>
.container_cart_shopping {
  width: 48%;
  margin: 5rem auto;
}

.container_cart_shopping img {
  width: 150px;
}

.container_cart_shopping div {
  text-align: center;
  line-height: 1.8;
}

.container_cart_shopping h5 {
  color: black;
}

.container_cart_shopping h3 {
  color: fuchsia;
}

.container_cart_shopping span {
  color: black;
}

.type_number {
  width: 65px;
  margin: 0 auto;
  padding-bottom: 1rem;
  font-weight: bolder;
  color: brown;
}

.type_number span {
  font-size: 1.1rem;
}

.all_price_pos {
  width: 225px;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.all_price_pos h3:nth-child(2) {
  color: purple;
}

.all_price_pos span {
  color: black;
}

.box_number_remove_product h5 {
  font-size: 0.9rem;
}

.clear_all_products {
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
}

.clear_all_products button {
  background: #eb1c23;
  padding: 0.6rem;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}

.clear_all_products button:hover {
  background: red;
  transition: 0.5s all;
}
</style>
