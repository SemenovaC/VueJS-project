<template>
    <div class="welcome-ticket-pages">
        <div >
            <h2>Добро пожаловать!</h2>
            <p>Здесь какой-то пример текста на самой странице (до подключения всяких роутеров итд итп).</p>
            <p>Тоже какой-нибудь текст, сюда вставим пару переменных потом</p>
        </div>
        <div class="button-container">
            <button>
                <RouterLink class="btn" :user="user" to="/changeNickname">
                    Change Nickname
                </RouterLink>
            </button>
            <button>
                <RouterLink class="btn" to="/ticketmaster">
                    Find Events
                </RouterLink>
            </button>
        </div>
    </div>
</template>

<script>
import ChangeNickname from './ChangeNickname.vue';
import TicketMaster from './TicketMaster.vue';

export default {
    name: 'MainPage',
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


h1 {
    font-size: 2.5rem;
    color: #333;
    padding-bottom: 20px;
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

button {
    margin-right: 20px;
}

</style>