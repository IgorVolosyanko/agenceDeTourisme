import { createRouter, createWebHistory } from "vue-router";

import Accueil from "../views/pages/Accueil.vue";
import Forfaits from "../views/pages/Forfaits.vue";
import Apropos from "../views/pages/Apropos.vue";
import ProductView from "../views/ProductView.vue";
import EditProductView from "../views/EditProductView.vue";
import AddProductView from "../views/AddProductView.vue";

const routes = [
  { path: "/", name: "accueil", component: Accueil },
  { path: "/forfaits", name: "forfaits", component: Forfaits },
  { path: "/apropos", name: "apropos", component: Apropos },
  { path: "/product:id", name: "product", component: ProductView },
  { path: "/add-product", name: "add-product", component: AddProductView },
  {
    path: "/edit-product/:id",
    name: "edit-product",
    component: EditProductView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
