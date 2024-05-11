<template>
  <div id="app">
    <MainPage v-for="(el, index) in users" :user="el" key="index" :users="users"/>
    
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';


export default {
  name: 'App',
  components: {
    MainPage, 
  },
  data() {
    return {
      users: [
        {
          login: 'mirri29',
          nickname: 'Miriam Levi',
          email: 'zali.miriam@gmail.com',
          userpic: null
        }
      ],
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
