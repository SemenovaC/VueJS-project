
<template>
  <div>
    <p>In your current nickname {{ user.nickname.length }} symbols <br> 
      You can change your nickname below
    </p>
    <input type="text" v-model="newNickname" placeholder="New nickname">
    <button @click="acceptNewNickname()">Accept</button>
    <p>Your new nickname is {{ newNickname }}</p>
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
      this.user.nickname = this.newNickname
    }
  },
  data() {
    return {
      newNickname: ''
    }
  },
}

</script>


<style scoped>

</style>