
<template>
  <div class="welcome-ticket-pages">
      <h2>REGISTER</h2>
      <div className="form">
        <form v-on:submit.prevent="onSubmit">
          <input type="text" placeholder="Login" v-model="login"/>
          <input type="password" placeholder="Password" v-model="password"/>
          <button @click="reg()">Register</button>
        </form>
        <Loader v-if="loading == true"/>
        <p v-if="errorMes != ''">{{ errorMes }}</p>
        <div>Are you already registered? <router-link to="/login"><span>Log In</span></router-link></div>
      </div>
  </div>
  
</template>

<script setup>
import Loader from './Loader.vue'
import { ref } from 'vue';
import {useAuthStore} from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const login = ref('');
const password = ref('');

const errorMes = ref('');
const loading = ref(false);

const reg = async () => {
  errorMes.value = ''
  console.log('res')
  if (login.value == '') {
    errorMes.value = 'Enter your login'
    return false
  } else if (password.value == '') {
    errorMes.value = 'Enter your password'
    return false
  }

  loading.value = true
  let res = await authStore.registerFunc(login.value, password.value);
  loading.value = false
  console.log(res);
  router.push('/ticketmaster')
}
</script>


<style>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input {
  border: 1px rgba(83, 83, 92, 1);
  border-radius: 2px;
  background: rgba(29, 29, 31, 1);
  width: 95%;
  padding: 8px 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

span {
  font-weight: bold;
}

span:hover {
  color: rgb(254, 93, 93);
}

p {
  color: rgb(254, 93, 93);
}

</style>