import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNMjuM8-JpowuK57jrFljyHV9s2-EBytY',
  authDomain: 'auth-way.firebaseapp.com',
  projectId: 'auth-way',
  storageBucket: 'auth-way.appspot.com',
  messagingSenderId: '99959402799',
  appId: '1:99959402799:web:dc25a8f1185edda991f1da'
}

// Initialize Firebase
initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
