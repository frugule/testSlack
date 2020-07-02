import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './styles/_custom.scss'

import firebase from 'firebase'
import firebaseApp from '../config/firebase'

firebaseApp

//firebase.initializeApp(firebaseConfig)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

let app = '';

firebase.auth().onAuthStateChanged(()  =>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
