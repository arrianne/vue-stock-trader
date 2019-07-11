import Vue from 'vue'
// i installed vue router with npm then added it below
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'

//importing the routes with the curly braces seen as it is a named export
import { routes } from './routes'

import store from './store/store.js'

// this enables the vue-router
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-87d34.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})


// creating our router here
// we pass an object where we configure our router.
// we set mode to history to get nicer urls without hashtags
// then we set our routes
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  // add the router to our vue instance
  router,
  store,
  render: h => h(App)
})
