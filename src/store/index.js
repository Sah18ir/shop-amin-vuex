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
    setAddToCart(state, {product , quantity}) {
      state.cart.push({product , quantity});
    },
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
        `front/products?title=${
          state.title != "" ? "&title=" + state.title : ""
        }`
      ).then((res) => {
        commit("setProducts", res.data.data.products);
      });
    },
    // get products to add to cart
    addProductsToCart({commit}, {product , quantity}){
      commit("setAddToCart" , {product , quantity})
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    getCart(state) {
      return state.product;
    },
  },
});
