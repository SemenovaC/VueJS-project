<template>
    <header>
        <div className="header-container">
            <h1>Некий заголовок для хэдера сайта</h1>
            <div className="logged-in">You successfully logged in as {{ user.login }}</div>
        </div>
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Портфолио</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    <div class="welcome-ticket-pages">
        <div class="welcome-page">
            <div class="container">
                <h2>Добро пожаловать!</h2>
                <p>Ваш текущий никнейм  = {{ user.nickname }}</p>
                <ChangeNickname :user="user"/>
                <p>Здесь какой-то пример текста на самой странице (до подключения всяких роутеров итд итп).</p>
                <p>Тоже какой-нибудь текст, сюда вставим пару переменных потом</p>
            </div>
        </div>
        <TicketMaster/>
    </div>
    <footer>
      <p>&copy; 2024 год, Очень уваажемая прекрасная фронтенд компания, назовём её, условно, РаматГанЛимитед. Все права защищены.</p>
    </footer>
</template>

<script>
import ChangeNickname from './ChangeNickname.vue';
import TicketMaster from './TicketMaster.vue';

export default {
    name: 'WelcomePage',
    components: {ChangeNickname, TicketMaster},
    props: {
        ['users']: {
            type: Object,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
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

h1 {
    font-size: 2.5rem;
    color: #333;
    padding-bottom: 20px;
}

.logged-in {
    width: 250px;
    text-align: end;
}

.welcome-ticket-pages {
    display: grid;
    grid-template-columns: 2fr 500px;
}

.welcome-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
}

h2 {
    font-size: 2.5rem;
    color: #333;
    padding-bottom: 20px;
}

p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 10px;
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