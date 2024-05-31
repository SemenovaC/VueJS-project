
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
      <p>Your current nickname  = {{ this.newNickname != '' ? this.newNickname : this.user.nickname }}</p>
      <p className="nickname">In your current nickname {{ newNickname.length }} symbols <br> 
        You can change your nickname below
      </p>
      <input id="clearInput" type="text" v-model="changedNickname" placeholder="New nickname">
      <button @click="acceptNewNickname()">Accept</button>
      <p v-if="changedNickname!= ''">Your new nickname is {{ changedNickname }}</p>
      <p v-if="changedNickname == ''" >You didn't enter any symbol</p>
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
      this.newNickname = this.changedNickname;
      this.clearInput();
    },
    // only from second click the input becomes empty (?)
    clearInput() {
      document.getElementById('clearInput').value = '';
    },
  },
  mounted() {
    if (localStorage.newNickname) {
      this.newNickname = localStorage.newNickname;
    }
  },
  watch: {
    newNickname (newName) {
      localStorage.newNickname = newName;
    }
  },
  data() {
    return {
      newNickname: '',
      changedNickname: ''
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