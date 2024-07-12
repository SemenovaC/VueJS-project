import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

const endpoints = {
  register: '/api/en/v1/registration',
  login: '/api/en/v1/login',
  editUser: (login) => `/api/en/v1/edit/${login}`,
  deleteUser: (login) => `/api/en/v1/delete/${login}`,
  getUserInfo: (login) => `/api/en/v1/${login}/info`,
}


export const useAuthStore = defineStore('auth', {
  state: () => (
    {
        token: null,
        login: null,
        nickname: null,
        roles: null,
        loading: false
    }
  ),
  actions: {
    async registerFunc(login, password) {
        this.loading = true
        try {
            await axios.post("http://dev.chardeck.su/api/en/v1/registration", {
                username: login,
                password: password,
            }).then(response => {
                console.log('AAAAAA') // ne doshlo
                this.updateUserData(response)
            })
        } catch(e) {
            console.log(e)
        } finally {
            this.loading = false
        }
    },
    async logInFunc(login, password) {
        this.loading = true
        try {
            await axios.post("http://dev.chardeck.su/api/en/v1/login", {}, {
                auth: {
                    username: login,
                    password: password,
                },
            }).then(response => {
                this.updateUserData(response);
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.loading = false
        }
    },
    updateUserData(response) {
        this.token = response.headers['x-token'] || null;
        this.login = response.data.login || null;
        this.nickname = response.data.nickname || null;
        this.roles = response.data.roles || null;
    },
  } 

});



//    registerFunc = async (payload) => {
//     error.value = '';
//     loader.value = true;
//     try {
//       let response = await axios.post("http://dev.chardeck.su/api/en/v1/registration", {
//         ...payload
//       })
//       console.log(response)
//       userInfo.value = {
//         token: response.headers['x-token'] || null,
//         login: response.data.login || null,
//         nickname: response.data.nickname || null,
//         roles: response.data.roles || null,
//         rememberMe: null
//       }
//       console.log(userInfo.value)
//     } catch (e) {
//         console.log(error.value);
//     } finally {
//       loader.value = false;
//     }
//   }

//   const logInFunc = async () => {
//     error.value = '';
//     loader.value = true;
//     try {
//       let response = await axios.post("http://dev.chardeck.su/api/en/v1/registration", {}, {
//         auth: {
//             username: login,
//             password: password,
//         }})
//       console.log(response)
//       response.map(updateUserInfo);
//     } catch (e) {
//         console.log(error.value);
//     } finally {
//       loader.value = false;
//     }
//   }

 
//   return {
//     userInfo, error, loader, registerFunc, logInFunc
//   }




 
