<template>
  <main class="min-h-screen h-full bg-background">
    <FrontCard />
  </main>
</template>

<script>
import FrontCard from './components/FrontCard.vue';

export default {
  name: "App",
  components: {
    FrontCard
},
};
</script>