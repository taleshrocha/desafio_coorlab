<template>
  <main class="grid grid-cols-1 lg:grid-cols-3 place-items-center min-h-screen h-full bg-background p-8 gap-4">
    <FrontCard class="lg:col-span-2" />
    <CustomForm :cities="cities"/>
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
  data() {
    return {
      cities: [],
      freights: [],
      form: {
        cityname: "",
        loadweight: 0,
      },
    };
  },
  async created() {
    this.freights = await this.getFreights();
    this.cities = Array.from(new Set(this.freights.map((freigh) => freigh.city)));
  },
  methods: {
    async getFreights() {
      const res = await fetch("api/transport");
      const data = await res.json();

      return data;
    },
  }
};
</script>