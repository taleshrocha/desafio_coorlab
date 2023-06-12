<template>
  <b-container fluid="true" class="d-flex flex-column align-items-center justify-content-center h-100">
    <BestTransport class="flex-grow-1" />
    <CustomFooter />
  </b-container>
</template>

<script>
import BestTransport from "./components/BestTransport.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default {
  name: "App",
  components: {
    BestTransport,
    CustomFooter,
  },
};
</script>

<style>
* {
  --color-prime: 40, 213, 211;
}

html,
body {
  min-height: 100vh;
  height: 100%;
}

.text-prime {
  color: rgb(var(--color-prime));
}

.bg-prime {
  background-color: rgb(var(--color-prime));
}
</style>
