
<template>
  <div>
    <p className="nickname">In your current nickname {{ user.nickname.length }} symbols <br> 
      You can change your nickname below
    </p>
    <input id="clearInput" type="text" v-model="newNickname" placeholder="New nickname">
    <button @click="acceptNewNickname()">Accept</button>
    <p v-if="newNickname != ''">Your new nickname is {{ newNickname }}</p>
    <p v-if="newNickname == ''" >You didn't enter any symbol</p>
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


  button {
    padding: 8px 15px;
    border-radius: 5px;
    border: 1px solid silver;
    font-size: 1rem;
    color: white;
    background: rgb(255, 121, 121);
    cursor: pointer;
  }

  button:hover {
    background: rgb(254, 93, 93);
  }

  button:active{
    opacity: 0.7;
  }
</style>