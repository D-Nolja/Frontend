import "ant-design-vue/dist/reset.css";
import "./assets/main.css";
import "@/assets/text-truncate-util.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Antd from "ant-design-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import piniaPluginPersist from "pinia-plugin-persist";
import router from "./router";
import { usePlaceStore } from "@/stores/place.js";
import { useHeaderStateStore } from "@/stores/headerState.js";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);

app.use(pinia);
app.use(router);
app.use(Antd);

const placeStore = usePlaceStore();
const headerStateStore = useHeaderStateStore();

headerStateStore.initializeStore();
placeStore.initializeStore().then(() => {
  app.mount("#app");
  app.AOS = new AOS.init();
});
