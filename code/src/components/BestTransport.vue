<template>
  <div class="content">
    <div class="data-select">
      <h1>Insira o destino e o peso</h1>
      <h2>Destino</h2>
      <b-form-select v-model="cityName" :options="cities" size="sm" class="mt-3" placeholder="Selecione o destino" />
      <h2>Peso</h2>
      <b-form-input v-model="loadWeight" type="number" placeholder="Peso da carga em kg" />
      <b-button variant="primary" class="button">Analisar</b-button>
    </div>
    <div class="data-show">
      <PriceCard 
         title="Frete com menor valor"
         shipping="Blah"
         time="6h"
         price="6"
      />
    </div>
  </div>
</template>

<script>
  import PriceCard from "./PriceCard"
export default {
  data() {
    return {
      cityName: null,
      loadWeight: null,
      cities: [],
    };
  },
  components: {
    PriceCard,
  },
  async created() {
    this.cities = await this.getcitynames();
    console.log(this.cities);
  },
  methods: {
    async getcitynames() {
      const res = await fetch("api/transport");
      const data = await res.json();

      const names = Array.from(new Set(data.map((item) => item.city)));

      return names;
    },
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 1.5rem;
  margin-top: 1rem;
  width: 100%;
}

.data-select {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: 5rem 1.5rem;
  background-color: lightgray;
  border-radius: 20px;
}

.data-show {
  height: 100%;
  padding: 5rem 1.5rem;
}

.button {
  padding: 0 3rem;
}
</style>
