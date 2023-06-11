<template>
<b-row class="m-3">
  <b-col md="4" class="bg-light rounded-lg border py-5">
    <b-form @submit="onSubmit" >
      <h1>Insira o destino e o peso</h1>
      <b-form-group id="input-group-1" label="Destino" label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.cityName"
          :options="cities"
          placeholder="Selecione o destino"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Peso" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.loadWeight"
          placeholder="Insira o peso"
          required
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Analisar</b-button>
    </b-form>
  </b-col>

  <b-col>
    <PriceCard
      title="Frete com menor valor"
      shipping="Blah"
      time="6h"
      price="6"
      iconName="cash-coin"
    />
    <PriceCard
      title="Frete mais rápido"
      shipping="Blah"
      time="6h"
      price="6"
      iconName="clock"
    />
  </b-col>
</b-row>
</template>

<script>
import PriceCard from "./PriceCard";
export default {
  data() {
    return {
      cities: [],
      form: {
        cityName: "",
        loadWeight: null,
      },
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
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
