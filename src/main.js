import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: 'AIzaSyCNMjuM8-JpowuK57jrFljyHV9s2-EBytY',
  authDomain: 'auth-way.firebaseapp.com',
  projectId: 'auth-way',
  storageBucket: 'auth-way.appspot.com',
  messagingSenderId: '99959402799',
  appId: '1:99959402799:web:dc25a8f1185edda991f1da'
})

createApp(App).use(router).mount('#app')
