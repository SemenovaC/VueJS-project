
<template class="template-color">
  <div class="welcome-ticket-pages">
    <div class="button-container">
      <button>
        <RouterLink class="btn" to="/">
          To Main Page
        </RouterLink>
      </button>
    </div>
    <div>
      <p>Your current nickname  = {{ user.nickname }}</p>
      <p className="nickname">In your current nickname {{ user.nickname.length }} symbols <br> 
        You can change your nickname below
      </p>
      <input id="clearInput" type="text" v-model="newNickname" placeholder="New nickname">
      <button @click="acceptNewNickname()">Accept</button>
      <p v-if="newNickname != ''">Your new nickname is {{ newNickname }}</p>
      <p v-if="newNickname == ''" >You didn't enter any symbol</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    acceptNewNickname() {
      this.user.nickname = this.newNickname;
      this.clearInput();
    },
    // only from second click the input becomes empty (?)
    clearInput() {
      document.getElementById('clearInput').value = '';
    }
  },
  data() {
    return {
      newNickname: '',
    }
  },
}

</script>


<style scoped>
  .nickname {
    font-size: 1.2rem;
  }

  input {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;
    padding: 8px 15px;
    background: #fafafa;
    color: #333;
    font-size: 1rem;
  }

button{
  margin-top: 30px;
}

.button-container {
  margin-top: 20px;
}
</style>