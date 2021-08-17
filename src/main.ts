import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
import "./assets/css/tailwind.css";
import "@/styles/index.scss";
import ImageItem from "@/components/ImageItem/ImageItem.vue";
import Loading from "@/components/Loading/Loading.vue";

createApp(App)
  .component("ImageItem", ImageItem)
  .component("Loading", Loading)
  .use(store)
  .use(router)
  .mount("#app");
