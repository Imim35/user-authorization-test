<template>
  <div>
    <div v-if="!auth" class="login" @click="authUser">
      <img  src="@/assets/Icon.svg" alt="User Avatar">
      <span class="login__text">Login</span>
    </div>
    <div v-else class="login" @click="logOut">
      <img class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt="User Avatar">
      <span class="login__text">Logout</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBarProfile",
  computed: {
    auth() { return this.$store.state.auth.authenticated }
  },
  methods: {
    authUser() {
      this.$popup.show('UserAuth')
    },
    logOut() {
      localStorage.removeItem('user');
      this.$store.commit('auth/AUTH_USER', false)
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 140px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 9px;
  cursor: pointer;
  background-color: #5988d9;
  border-radius: 10px;
  transition: 0.3s ease;
  img {
    width: 36px;
    height: 36px;
    margin-right: 15px;
  }
  &__text {
    font-size: 20px;
    color: #ffffff;
    text-decoration: none solid rgb(255, 255, 255);
  }
  &:hover {
    background-color: #4d84e2;
  }
}
</style>
