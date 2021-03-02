import Vue from 'vue'
import App from './App.vue'
import ContextModal from './components/ContextModal';

Vue.config.productionTip = false;
Vue.use(ContextModal);

new Vue({
  render: h => h(App),
}).$mount('#app')
