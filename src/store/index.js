import axios from "axios";
import { createStore } from "vuex";

const Axios = axios.create({
  baseURL: "https://api.elinorboutique.com/v1/",
});

export default createStore({
  state: {
    products: [],
    cart: [],
    product: null,
    title: null,
    sortName: "",
    categoryFilter: "",
  },
  mutations: {
    setProducts(state, list) {
      state.products = list;
    },
    setProduct(state, list) {
      state.product = list;
    },
    setTitle(state, val) {
      state.title = val;
    },
    set_AddTo_Cart(state, { product, quantity }) {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        return;
      }
      state.cart.push({ product, quantity });
    },
    remove_Product_From_Cart(state, product) {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },
    clear_Cart_Items(state) {
      state.cart = [];
    },
    setSortName(state, value) {
      state.sortName = value;
    },
    // set_category_filter(state, value) {
    //   state.categoryFilter = value;
    // },
  },
  actions: {
    // get products from server
    async fetchProductsFromServer({ commit }, filter) {
      await Axios.get(
        `front/products?page= ${filter.page}${
          filter.search != "" ? "&keyword = " + filter.search : ""
        }`
      ).then((res) => {
        commit("setProducts", res.data.data.products);
      });
    },
    // get productdeateil from server
    async fetchProductFromServer({ commit }, id) {
      await Axios.get("front/products/" + id).then((res) => {
        commit("setProduct", res.data.data.product);
      });
    },
    // get products to search
    async fetchTitle({ commit, state }) {
      await Axios.get(
        `front/products?${state.sortName != "" ? "sort=" + state.sortName : ""}
          ${
            state.categoryFilter != ""
              ? "&category_id" + state.categoryFilter
              : "2"
          }
        ${state.title != "" ? "&title=" + state.title : ""}`
      ).then((res) => {
        commit("setProducts", res.data.data.products);
      });
    },
    // get products to add to cart
    addProductsToCart({ commit }, { product, quantity }) {
      commit("set_AddTo_Cart", { product, quantity });
    },
    removeProductFromCart({ commit }, product) {
      commit("remove_Product_From_Cart", product);
    },
    clearCartItems({ commit }) {
      commit("clear_Cart_Items");
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    getCartItemCount(state) {
      return state.cart.length;
    },
    getCartTotalPrice(state) {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
    getSortName(state) {
      return state.sortName;
    },
    // getCategoryFilter(state) {
    //   return state.categoryFilter;
    // },
  },
});
