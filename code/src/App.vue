<template>
  <main id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="ml-2">
        <b>Melhor Frete</b>
      </b-navbar-brand>
    </b-navbar>
    <BestTransport />
  </main>
</template>

<script>
import BestTransport from "./components/BestTransport.vue";
import { BNavbar, BNavbarBrand } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    BNavbar,
    BNavbarBrand,
    BestTransport,
  },
}
</script>

<style scoped>
main {
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
}

.navbar {
  background-color: #00aca6 !important;
}

.navbar-brand {
  margin-left: 20px;
}
</style>
