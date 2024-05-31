import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue'
import AboutUs from './components/AboutUs.vue'
import Contacts from './components/Contacts.vue'
import Portfolio from './components/Portfolio.vue'
import Settings from './components/Settings.vue'
import ChangeNickname from './components/ChangeNickname.vue';
import TicketMaster from './components/TicketMaster.vue';


const routes = [{
    name: 'MainPage',
    path: '/',
    component: MainPage,
  },
  {
    name: 'AboutUs',
    path: '/aboutus',
    component: AboutUs
  },
  {
    name: 'Settings',
    path: '/settings',
    component: Settings
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: Portfolio
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts
  },
  {
    name: 'ChangeNickname',
    path: '/changenickname',
    component: ChangeNickname
  },
  {
    name: 'TicketMaster',
    path: '/ticketmaster',
    component: TicketMaster
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
}) 

export default router