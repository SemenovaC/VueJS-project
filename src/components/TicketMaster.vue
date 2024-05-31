<template>
  <div class="template-color">
    <div class="btn-tomainpage">
      <button>
        <RouterLink class="btn" to="/">
          To Main Page
        </RouterLink>
      </button>
    </div>
    <div class="ticket-master">
      <div class="ticket-master-box">
        <div v-if="info != null">
          <img :src='eventImage'>
          <p>{{ eventName }}</p>
          <a :href="eventInfo">For more details</a>
        </div>
      </div>
      <button v-show="info == null" class="ticket-master-btn" @click="getInfo()">Event Information</button>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
      error: '',
      myApiKey: '4eCGWZGQ0eWkQAmMaIvJ9whZEsU7jbCD'
    }
  },
  computed: {
    eventImage() {
      return this.info.images[1].url
  },
    eventName() {
      return this.info.name
    },
    eventInfo() {
      return this.info.url
    },
  },
  methods: {
    getInfo() {
      axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?page=7&size=1&countryCode=US&apikey=${this.myApiKey}`)
        .then(res => (this.info = res.data._embedded.events[0]))

    }
  }
}
</script>



<style scoped>
  .ticket-master {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-tomainpage {
    background-color: #f0f0f0;
    padding-top: 20px;
  }

  .ticket-master-box{
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    padding: 8px 15px;
    border-radius: 5px;
    border: 1px solid silver;
    font-size: 1rem;
    color: white;
    background: rgb(255, 121, 121);
    cursor: pointer;
    margin-bottom: 40px;
  }

  button:hover {
    background: rgb(254, 93, 93);
  }

  button:active{
    opacity: 0.7;
  }

  img {
    width: 70%;
  }
  
</style>