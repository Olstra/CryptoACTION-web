import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import MonitoringView from "../views/MonitoringView.vue";
import TracingView from "../views/TracingView.vue";
import LegalView from "../views/LegalView.vue";

const routes = [
  { path: "/", name: "monitoring", component: MonitoringView },
  { path: "/legal", name: "legal", component: LegalView },
  { path: "/tracing", name: "tracing", component: TracingView },
  { path: "/about", name: "about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
