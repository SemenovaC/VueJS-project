import axios from "axios";
import { defineStore } from "pinia";

const useChardeckStore = defineStore('chardeckStore', () => {
  const logInFunc = () => {
    axios.post("http://dev.chardeck.su/api/en/v1/registration", {
      login: marsika,
      password: te1212
    })
    .then((response) => {
      console.log(response)
    })
  }
 
  return {
    logInFunc
  }

});