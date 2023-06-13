<template>
  <main class="grid grid-cols-1 lg:grid-cols-3 place-items-center min-h-screen h-full bg-background p-8 gap-4">
    <!--
<FrontCard class="lg:col-span-2" />
    -->
    <PriceCard 
    class="col-span-2"
    title="Frete com o Menor Custo"
    shipping="Levoja"
    time="6h"
    price="150 R$"
    />
    <CustomForm @form-submitted="handleFormSubmit" :cities="cities"/>
  </main>
</template>

<script>
//import FrontCard from './components/FrontCard.vue';
import CustomForm from './components/CustomForm.vue';
import PriceCard from './components/PriceCard.vue';

export default {
  name: "App",
  components: {
    //FrontCard,
    CustomForm,
    PriceCard,
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
    handleFormSubmit(data) {
      console.log(data)
    }
  }
};
</script>