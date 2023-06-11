<template>
  <b-container fluid="true">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="ml-2"> Melhor Frete </b-navbar-brand>
    </b-navbar>
    <BestTransport />
  </b-container>
</template>

<script>
import BestTransport from "./components/BestTransport.vue";

export default {
  name: "App",
  components: {
    BestTransport,
  },
};
</script>
