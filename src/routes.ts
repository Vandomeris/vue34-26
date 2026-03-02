import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import SingleProductPage from './pages/SingleProductPage.vue'
import ExchangePage from './pages/ExchangePage.vue'
import CartPage from './pages/CartPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: SingleProductPage },
  { path: '/exchange', component: ExchangePage },
  { path: '/cart', component: CartPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
