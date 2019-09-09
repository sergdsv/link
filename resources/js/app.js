require('./bootstrap');

window.Vue = require('vue');
import router from './router.js'
import App from './App.vue'
import store from './store'
window.axios = require('axios');

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import animateCss from 'animate.css';
Vue.use(animateCss)

import DatePicker from 'vue2-datepicker';
Vue.use(DatePicker);

import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: 'rgb(25,0,255)',
    failedColor: 'red',
    height: '5px'
});

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VDebounce from 'vue-debounce';
Vue.use(VDebounce);

Vue.component('image-upload', require('./components/ImageUpload.vue').default);
Vue.component('search-component', require('./components/SearchComponent.vue').default);
Vue.component('App', require('./App.vue').default);

const app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
