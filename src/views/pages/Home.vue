<template>
  <div>
    <div v-if="auth" class="home">
      <h1>Good job buddy</h1>
      <img src="@/assets/giphy.gif">
    </div>
    <div v-else>
      Hi, I'll check you, try to log in
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      checkUserInterval: null
    }
  },
  computed: {
    auth() { return this.$store.state.auth.authenticated }
  },
  created() {
    // Get all users
    // Start interval
    this.$store.dispatch('auth/getUsers')
    this.intervalCheck()
    this.checkUserInterval = setInterval(this.intervalCheck, 1000)
    if(localStorage.getItem('successful')) {
      const payload = JSON.parse(localStorage.getItem('successful'))
      this.$store.commit('auth/user/SUCCESSFUL_TRY', payload)
    }
    if(localStorage.getItem('unsuccessful')) {
      const payload = JSON.parse(localStorage.getItem('unsuccessful'))
      this.$store.commit('auth/user/UNSUCCESSFUL_TRY', payload)
    }
  },

  methods: {
    // Checking for the presence of a user
    intervalCheck() {
      if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'))
        this.$store.commit('auth/AUTH_USER', true)
        this.$store.commit('auth/user/SET', ...user);
      } else {
        this.$store.commit('auth/AUTH_USER', false)
        this.$store.commit('auth/user/SET', null)
      }
    }
  },

  beforeDestroy() {
    clearInterval(this.checkUserInterval)
  }
}
</script>

<style lang="scss">
.home {
  @media (max-width: 530px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
}
</style>
