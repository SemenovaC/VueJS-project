<template>
  <div id="app">
    <MainPage v-for="(el, index) in users" :user="el" key="index"/>
    <ChangeNickname v-for="(user, index) in users" :user="user" key="index"/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import ChangeNickname from './components/ChangeNickname.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    ChangeNickname 
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
