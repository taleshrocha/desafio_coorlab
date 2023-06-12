<template>
  <b-row class="m-3">
    <b-col md="4" class="bg-light rounded-lg border py-5">
      <b-form @submit="onSubmit">
        <h1>Insira o destino e o peso</h1>
        <b-form-group id="input-group-1" label="Destino" label-for="input-1">
          <b-form-select id="input-1" v-model="form.cityName" :options="cities" placeholder="Selecione o destino"
            required />
        </b-form-group>

        <b-form-group id="input-group-2" label="Peso" label-for="input-2">
          <b-form-input id="input-2" v-model="form.loadWeight" placeholder="Insira o peso" required />
        </b-form-group>

        <b-button type="submit" variant="primary">Analisar</b-button>
      </b-form>
    </b-col>

    <b-col>
      <b-container fluid="true" v-show="showInfo">
        <PriceCard title="Frete com menor valor" :shipping="cheapestFreight.name" :time="cheapestFreight.lead_time"
          :price="cheapestFreight[costTransport]" iconName="cash-coin" />
        <PriceCard title="Frete mais rápido" :shipping="fastestFreight.name" :time="fastestFreight.lead_time"
          :price="fastestFreight[costTransport]" iconName="clock" />
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import PriceCard from "./PriceCard";
export default {
  data() {
    return {
      showInfo: false,
      costTransport: "",
      cities: [],
      cheapestFreight: {},
      fastestFreight: {},
      freightsToCity: [],
      freights: [],
      form: {
        cityName: "",
        loadWeight: 0,
      },
    };
  },
  components: {
    PriceCard,
  },

  async created() {
    this.freights = await this.getTrasports();
    // TODO: comment
    this.cities = Array.from(new Set(this.freights.map((item) => item.city)));
  },

  methods: {
    async getTrasports() {
      const res = await fetch("api/transport");
      const data = await res.json();

      return data;
    },
    onSubmit(event) {
      event.preventDefault();
      this.freightsToCity = this.freights.filter(
        (freight) => freight.city === this.form.cityName
      );
      // TODO: if cheapest as fastest is the same lead time. Then: show cheapest
      this.getCheapestFreight();
      this.getFastestFreight();
      if (this.cheapestFreight.lead_time === this.fastestFreight.lead_time) {
        this.fastestFreight = this.cheapestFreight
      }
      this.showInfo = true
      //alert(JSON.stringify(this.form));
    },
    getCheapestFreight() {
      this.costTransport =
        this.form.loadWeight > 100
          ? "cost_transport_heavy"
          : "cost_transport_light";

      this.cheapestFreight = this.freightsToCity.reduce((min, freight) => {
        return parseFloat(freight[this.costTransport].replace("R$", "")) <
          parseFloat(min[this.costTransport].replace("R$", ""))
          ? freight
          : min;
      });
    },
    getFastestFreight() {
      this.fastestFreight = this.freightsToCity.reduce((min, freight) => {
        return parseFloat(freight.lead_time.replace("h", "")) <
          parseFloat(min.lead_time.replace("h", ""))
          ? freight
          : min;
      });
    },
  },
};
</script>
