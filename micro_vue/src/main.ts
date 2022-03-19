import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./router";
import store from "./store";
import "./public-path";
import actions from "./action";
const APP_NAME = require("../package.json").name;

const app = createApp(App);

let router = null;
function render(props: any) {
  const { container } = props;

  router = createRouter({
    history: createWebHistory(
      (window as any).__POWERED_BY_QIANKUN__
        ? `/${APP_NAME}/`
        : process.env.BASE_URL
    ),
    routes,
  });

  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  // console.log("[micro_vue] bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  // console.log("[micro_vue] mount", props);
  actions.setActions(props); //注入actions实例
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  // console.log("[micro_vue] unmount");
  app.unmount();
}
