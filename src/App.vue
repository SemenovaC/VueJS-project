<template>
    <div id="app">
      <MainPage />
    </div>
  </template>
  
  <script>
  import MainPage from './MainPage.vue';
  
  export default {
    name: 'App',
    components: {
      MainPage
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  </style>
  