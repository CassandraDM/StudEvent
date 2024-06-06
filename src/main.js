import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import SingleEvent from "./components/SingleEvent.vue";
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [{ path: "/single-event/:id", component: SingleEvent }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
