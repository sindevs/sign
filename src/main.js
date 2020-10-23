import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import {
  iconsSet as icons
} from './assets/icons/icons.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import VueProgressBar from "vue-progressbar";

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueSweetalert2);
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueProgressBar, {
  color: "#FF5722",
  failedColor: "red",
  height: "10px",
  position: "relative"
});

Vue.prototype.$log = console.log.bind(console)

export default new Vue({
  el: '#app',
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");