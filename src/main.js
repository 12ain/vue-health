import Vue from 'vue'
import "normalize.css/normalize.css";
import App from './App.vue'
import router from './router'
import store from './store'
import { 
  Button, 
  Icon, 
  Tabbar, 
  TabbarItem,
  NavBar
} from "vant";
Vue.use(Button)
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
