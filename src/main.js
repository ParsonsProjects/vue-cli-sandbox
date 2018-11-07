import Vue from 'vue';
import Vuelidate from 'vuelidate';
import TreeView from "vue-json-tree-view";
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(TreeView);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
