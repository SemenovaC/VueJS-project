<template>
  <div id="app">
      <MainPage :user="user"/>
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
      user: 
        {
          login: 'mirri31',
          nickname: 'Miriam Levi',
          email: 'zali.miriam@gmail.com',
          userpic: null
        }
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
