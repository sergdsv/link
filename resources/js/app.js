/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
window.Vue.use(VueRouter);
window.axios = require('axios');

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import DatePicker from 'vue2-datepicker'
Vue.use(DatePicker);


import PostsIndex from './components/docs/posts/PostsIndex.vue';
import PostCreate from './components/docs/posts/PostCreate.vue';
import PostShow from './components/docs/posts/PostShow';
import OrgansIndex from './components/docs/organs/OrgansIndex';


const routes = [
    {path: '/', component: PostsIndex, name: 'indexPosts'},
    {path: '/create', component: PostCreate, name: 'createPost'},
    {path: '/show/:id', component: PostShow, name: 'showPost'},
    {path: '/organs/', component: OrgansIndex, name: 'indexOrgans'},

]

const router = new VueRouter({ routes });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('image-upload', require('./components/ImageUpload.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });


const app = new Vue({ router }).$mount('#app');
