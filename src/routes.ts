import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import SingleProductPage from './pages/SingleProductPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: SingleProductPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
