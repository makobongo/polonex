import store from "./store";
import Vue from 'vue';
require('./bootstrap');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    store,
    el: '#app',
});
