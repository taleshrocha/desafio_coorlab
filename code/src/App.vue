<template>
  <main class="grid grid-cols-1 lg:grid-cols-3
  min-h-screen h-full bg-background p-8 gap-4">
    <FrontCard class="lg:col-span-2" />
    <CustomForm />
  </main>
</template>

<script>
import FrontCard from './components/FrontCard.vue';
import CustomForm from './components/CustomForm.vue';

export default {
  name: "App",
  components: {
    FrontCard,
    CustomForm
},
};
</script>