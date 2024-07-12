<template>
  <div id="app">
    <header>
        <div className="header-container">
          <div class="logo">
            <img src="./assets/icons/Union.svg" alt="logo"/>
          </div>
            <h1>Chardeck</h1>
            <div class="mini-picture">
              <img class="small-image" src="./assets/icons/book.svg"/>
              <RouterLink to="/"> 
                Main Page 
              </RouterLink>
            </div>
            <div class="mini-picture">
              <img class="small-image" src="./assets/icons/personas.svg"/>
              <RouterLink to="/aboutus"> 
                About Us
              </RouterLink>
            </div>
            <div class="mini-picture">
              <img class="small-image" src="./assets/icons/lamp.svg"/>
              <RouterLink to="/portfolio"> 
                Portfolio
              </RouterLink>
            </div>
            <div class="mini-picture">
              <img class="small-image" src="./assets/icons/chat.svg"/>
              <RouterLink to="/login"> 
                Log In
              </RouterLink>
            </div>
            <div class="mini-picture">
              <img class="small-image" src="./assets/icons/randomchar.svg"/>
              <RouterLink class="small-image" to="/settings"> 
                Settings
              </RouterLink>
            </div>
        </div>
        <div className="logged-in">
          <div class="create">
            CREATE
            <img class="plus" src="./assets/icons/plus.svg"/>
          </div>
          <img class="logo-block-pic" src="./assets/icons/heart.svg"/>
          <div class="notification-block">
            <img class="logo-block-pic" src="./assets/icons/bell.svg"/>
            <div class="red-notification">24</div>
          </div>
          <img :src="user.userpic" alt="User Picture"/>
        </div>
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
import usericon from './assets/icons/logopic.svg'


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
          userpic: usericon
        }
    }
  }
};
</script>

<style>


header {
  background: rgba(49, 49, 54, 1);
  border-bottom: 1px solid rgba(83, 83, 92, 1);
  color: white;
  height: 60px;
  position: fixed;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.header-container {
  width: 789px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  background: rgba(174, 198, 255, 1);
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-left: 24px;
}

.small-image {
  height: 17px;
  width: 17px;
  margin-left: 4px;
}

.create {
  width: 99px;
  height: 33px;
  border-radius: 2px;
  padding: 8px 12px 8px 12px;
  display: flex;
  justify-content: center;
  background: rgba(174, 198, 255, 1);
  color: rgba(24, 24, 26, 1);
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.plus {
  margin-left: 4px;
  width: 17px;
  height: 17px;
}

.logo-block-pic {
  height: 20px;
  width: 22px;
}

.logged-in {
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 280px;
    padding-right: 64px;
}

.notification-block {
  display: flex;
  position: relative;
}

.red-notification {
  position: absolute;
  background: rgba(168, 31, 31, 1);
  width: 20px;
  height: 15px;
  font-size: 12px;
  border-radius: 4px;
  top:-7px;
  right: -7px;
}

footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
</style>
