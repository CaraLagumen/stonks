import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stonks from "./components/stonks/Stonks.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/stonks",
    component: Stonks,
  },
];
