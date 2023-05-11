import { createApp } from "vue";
import store from "./store/index";
import App from "./App";
import "materialize-css/dist/js/materialize";
import components from "./components";
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).mount("#app");
