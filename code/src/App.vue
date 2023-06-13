<template>
  <main class="grid grid-cols-1 lg:grid-cols-3 place-items-center min-h-screen h-full bg-background p-8 gap-4">
    <CustomForm @form-submitted="handleFormSubmit" :cities="cities" />

    <transition enter-active-class="duration-300 ease-out" leave-active-class="duration-200 ease-in"
      enter-class="opacity-0" leave-to-class="opacity-0">
    <FrontCard v-show="showFrontCard" class="lg:col-span-2" />
    </transition>


    <transition enter-active-class="duration-300 ease-out" leave-active-class="duration-200 ease-in"
      enter-class="opacity-0" leave-to-class="opacity-0">
      <div v-show="showPriceCard" class="lg:col-span-2 grid grid-rows-2 gap-4">
        <PriceCard title="Frete Mais Barato" :name="freights.cheapest.name" :time="freights.cheapest.lead_time"
          :price="freights.cheapest[freights.costTransport]" imageName="money.png" />
        <PriceCard title="Frete Mais Rápido" :name="freights.fastest.name" :time="freights.fastest.lead_time"
          :price="freights.fastest[freights.costTransport]" imageName="clock.png" />
        <button @click="handleClean"
          class="rounded-full bg-primary border-0 p-2 font-bold text-white mt-4">Limpar</button>
      </div>
    </transition>
  </main>
</template>

<script>
import FrontCard from './components/FrontCard.vue';
import CustomForm from './components/CustomForm.vue';
import PriceCard from './components/PriceCard.vue';

export default {
  name: "App",
  components: {
    FrontCard,
    CustomForm,
    PriceCard,
  },
  data() {
    return {
      imageName: "../../assets/clock.png",
      showPriceCard: false,
      showFrontCard: true,
      cities: [],
      freights: {
        all: [],
        cheapest: {},
        fastest: {},
        costTransport: "",
      },
    };
  },
  async created() {
    // Get all freights from API.
    const res = await fetch("api/transport");
    this.freights.all = await res.json();

    // Get all city names and make sure they are unique.
    this.cities = Array.from(new Set(this.freights.all.map((freight) => freight.city)));
  },
  methods: {
    handleFormSubmit({ cityName, loadWeight }) {
      // Get all the freights that go to the selected city.
      const freightsToCity = this.freights.all.filter(
        (freight) => freight.city === cityName
      );

      // Get cheapest and fastest freight.
      this.freights.cheapest = this.getCheapestFreight({ freightsToCity, loadWeight });
      this.freights.fastest = this.getFastestFreight({ freightsToCity });

      if (this.freights.cheapest.lead_time === this.freights.fastest.lead_time) {
        this.freights.fastest = this.freights.cheapest;
      }

      this.showFrontCard = false;

      setTimeout(() => {
        this.showPriceCard = true;
      }, 300);
    },
    handleClean() {

      // Hide the price card and show the front card
      this.showPriceCard = false;

      setTimeout(() => {
        this.showFrontCard = true;
      }, 300);

    },
    getCheapestFreight({ freightsToCity, loadWeight }) {
      // If the loadWeight is more than 100kg, then we'll get the cost for the heavy transport.
      // Else, we'll get the cost for the light transport.
      this.freights.costTransport =
        loadWeight > 100
          ? "cost_transport_heavy"
          : "cost_transport_light";

      // Gets the freight to the selected city with the minimum cost.
      return freightsToCity.reduce((min, freight) => {
        return parseFloat(freight[this.freights.costTransport].replace("R$", "")) <
          parseFloat(min[this.freights.costTransport].replace("R$", ""))
          ? freight
          : min;
      });
    },
    getFastestFreight({ freightsToCity }) {
      // Gets the freight to the selected city with the minimum lead time.
      return freightsToCity.reduce((min, freight) => {
        return parseFloat(freight.lead_time.replace("h", "")) <
          parseFloat(min.lead_time.replace("h", ""))
          ? freight
          : min;
      });
    },
  },
};
</script>
