<template>
  <div class="app-layout h-100" id="app-layout">

    <!-- Navbar -->
    <nav-bar />

    <!-- Popup -->
    <popup />

    <!-- Page Content -->
    <div class="main-content-container h-100 px-4 pt-4 mt-1">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  name: "AppLayout",
  components: { NavBar }
}
</script>
