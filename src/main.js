import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')


  // export default {
  //   name: 'MainPage',
  //   props: {
  //     user: 
  //       {
  //         login: 'mirri31',
  //         nickname: 'Miriam Levi',
  //         email: 'zali.miriam@gmail.com',
  //         userpic: null
  //       }
  //   }
  // }

