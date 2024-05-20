<template>
  <div id="app">
    <header>
        <div className="header-container">
            <h1>Некий заголовок для хэдера сайта</h1>
            <div className="logged-in">You successfully logged in as {{ user.login }}</div>
        </div>
        <nav>
            <ul>
                <li><RouterLink to="/"> 
                      Main Page 
                    </RouterLink>
                </li>
                <li><RouterLink to="/aboutus"> 
                      About Us
                    </RouterLink></li>
                <li><RouterLink to="/services"> 
                      Services
                    </RouterLink></li>
                <li><RouterLink to="/portfolio"> 
                      Portfolio
                    </RouterLink></li>
                <li><RouterLink to="/contacts"> 
                      Contacts
                    </RouterLink></li>
            </ul>
        </nav>
    </header>
    <main>
      <RouterView :user="user"/>
      <!-- <MainPage :user="user"/> -->
    </main>
    <footer>
      <p>&copy; 2024 год, Очень уваажемая прекрасная фронтенд компания, назовём её, условно, РаматГанЛимитед. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';

//import { computed } from 'vue';
// import { useRoute, useRouter } from 'vue-router';

// const router = useRouter()
// const route = useRoute()

// const search = computed({
//   get() {
//     return route.query.search ?? ''
//   },
//   set(search) {
//     router.replace({query: {search}})
//   }
// })


export default {
  name: 'App',
  components: {
    MainPage, 
  },
  // methods: {
  //   goToMainPage() {
  //       this.$router.push('/')
  //   },
  // },
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

header {
    background-color: #585c77;
    color: white;
    padding: 20px;
}

.header-container {
    display: grid;
    grid-template-columns: 2fr 250px;
    align-items: center;
    justify-content: space-between;
}

.logged-in {
    width: 250px;
    text-align: end;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; 
  justify-content: space-evenly;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
</style>
