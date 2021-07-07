<template>
  <header class="nav-bar px-4">
    <div class="nav-bar__fingers">
      <div class="up"><img src="@/assets/fingerUp.svg" alt="Finger Up"> <span>{{successful}}</span></div>
      <div class="down"><img src="@/assets/fingerDown.svg" alt="Finger Down"><span>{{unsuccessful}} </span></div>
    </div>

    <!-- Profile [Профиль] -->
    <nav-bar-profile />

  </header>
</template>

<script>
import NavBarProfile from "./NavBarProfile";
export default {
  name: "NavBar",
  components: { NavBarProfile },
  computed: {
    successful()   { return this.$store.state.auth.user.data.successful },
    unsuccessful() { return this.$store.state.auth.user.data.unsuccessful }
  }
}
</script>

<style lang="scss">
.nav-bar {
  height: 60px;
  background-color: #84b0c5;
  box-shadow: 15px -14px 8px 10px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 420px) {
    height: 140px;
    justify-content: center;
    flex-direction: column;
    &__fingers {
      margin-bottom: 1rem;
    }
  }
  &__fingers {
    display: flex;
    span {
      font-size: 20px;
      color: #ffffff;
    }
    .up{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 48px;
      border-radius: 10px;
      background-color: #28a745;
      margin-right: 31px;
      img {
        margin-right: 15px;
      }
    }
    .down{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 101px;
      height: 48px;
      border-radius: 10px;
      background-color: #dc3545;
      img {
        margin-right: 15px;
      }
    }
  }
}
</style>
