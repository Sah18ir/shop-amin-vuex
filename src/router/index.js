import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import ShopCart from '@/views/ShopCart.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Products/ProductDetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/ProductDetail/:id/:slug?',
    name: 'ProductDetail',
    component: () => import("../views/ProductDetail.vue")
  },
  {
    path: '/ShopCart',
    name: 'ShopCart',
    component: ShopCart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
