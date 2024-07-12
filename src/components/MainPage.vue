<template>
    <div class="welcome-ticket-pages">
        <div >
            <h2>Welcome!</h2>
            <!-- <input type="text" placeholder="Login" v-model="logUser.login"/>
            <input type="password" placeholder="Password" v-model="logUser.password"/>
            <button @click="toLogInUser()">Log in</button> -->
            <p></p>
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

<script >
import ChangeNickname from './ChangeNickname.vue';
import TicketMaster from './TicketMaster.vue';
import axios from 'axios';
//import {useChardeckStore} from './stores/ChardeckStore';

//const logIn = useChardeckStore();

export default {
    name: 'MainPage',
    components: {ChangeNickname, TicketMaster},
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    // data() {
    //     return{
    //         logUser: {
    //             login: '',
    //             password: ''
    //         }
    //     }
    // },
    // methods: {
    //     toLogInUser() {
    //         axios.post("http://dev.chardeck.su/api/en/v1/registration", this.logUser)
    //             .then(response => console.log(response))
    //             .catch(error => console.log(error))
    // }
    // } 
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background: rgba(35, 35, 37, 1);
}

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