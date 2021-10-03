import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Receipt from "@/views/Receipt.vue";
import Detail from "@/views/Detail.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/receipt/:category",
    name: "Receipt",
    component: Receipt,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
