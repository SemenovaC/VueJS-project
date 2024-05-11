<template>
    <header>
        <h1>Некий заголовок для хэдера сайта</h1>
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
    <div class="welcome-page">
        <div class="container">
            <h1>Добро пожаловать!</h1>
            <p>Здесь какой-то пример текста на самой странице (до подключения всяких роутеров итд итп).</p>
            <p>Тоже какой-нибудь текст, сюда вставим пару переменных потом</p>
        </div>
    </div>
    <footer>
      <p>&copy; 2024 год, Очень уваажемая прекрасная фронтенд компания, назовём её, условно, РаматГанЛимитед. Все права защищены.</p>
    </footer>
</template>

<script>
export default {
    name: 'WelcomePage'
};
</script>

<style>
header {
    background-color: #585c77;
    color: white;
    padding: 20px;
}

.welcome-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
}

h1 {
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