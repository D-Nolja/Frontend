// 스타일 및 CSS 임포트
import "ant-design-vue/dist/reset.css";
import "./assets/main.css";
import "@/assets/text-truncate-util.css";
import "aos/dist/aos.css";

// Vue 및 라이브러리 임포트
import { createApp } from "vue";
import Antd from "ant-design-vue";
import AOS from "aos";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

// 애플리케이션 컴포넌트 및 라우터 임포트
import App from "./App.vue";
import router from "./router";

// Store 임포트
import { usePlaceStore } from "@/stores/place.js";
import { useHeaderStateStore } from "@/stores/headerState.js";
import { useUserStore } from "@/stores/user.js";

// Pinia 및 Store 설정
const pinia = createPinia();
pinia.use(piniaPluginPersist);

// 애플리케이션 초기화
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Antd);

// Store 인스턴스 생성
const userStore = useUserStore();
const placeStore = usePlaceStore();
const headerStateStore = useHeaderStateStore();

// Store 초기화 및 로그인 상태 확인
userStore.checkInitialLoginState();
// headerStateStore.initializeStore();

// 애플리케이션 마운트 및 AOS 초기화
placeStore.initializeStore().then(() => {
  app.mount("#app");
  app.AOS = new AOS.init();
});
