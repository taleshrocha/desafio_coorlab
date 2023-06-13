<template>

      <b-container fluid="true" v-show="showInfo">
        <PriceCard title="Frete com menor valor" :shipping="cheapestFreight.name" :time="cheapestFreight.lead_time"
          :price="cheapestFreight[costTransport]" iconName="cash-coin" />
        <PriceCard title="Frete mais rápido" :shipping="fastestFreight.name" :time="fastestFreight.lead_time"
          :price="fastestFreight[costTransport]" iconName="clock" />
      </b-container>
    </b-col>

    </b-col>
  </b-row>
</template>

<script>
import pricecard from "./pricecard";
export default {
  data() {
    return {
      showinfo: false,
      showmodal: false,
      costtransport: "",
      cities: [],
      cheapestfreight: {},
      fastestfreight: {},
      freightstocity: [],
      freights: [],
      form: {
        cityname: "",
        loadweight: 0,
      },
    };
  },
  components: {
    pricecard,
  },

  async created() {
    this.freights = await this.gettrasports();
    // todo: comment
    this.cities = array.from(new set(this.freights.map((item) => item.city)));
  },

  methods: {
    async gettrasports() {
      const res = await fetch("api/transport");
      const data = await res.json();

      return data;
    },
    onsubmit(event) {
      event.preventdefault();
      this.freightstocity = this.freights.filter(
        (freight) => freight.city === this.form.cityname
      );
      this.getcheapestfreight();
      this.getfastestfreight();

      if (this.cheapestfreight.lead_time === this.fastestfreight.lead_time) {
        this.fastestfreight = this.cheapestfreight;
      }
      this.showinfo = true;
    },
    getcheapestfreight() {
      this.costtransport =
        this.form.loadweight > 100
          ? "cost_transport_heavy"
          : "cost_transport_light";

      this.cheapestfreight = this.freightstocity.reduce((min, freight) => {
        return parsefloat(freight[this.costtransport].replace("r$", "")) <
          parsefloat(min[this.costtransport].replace("r$", ""))
          ? freight
          : min;
      });
    },
    getfastestfreight() {
      this.fastestfreight = this.freightstocity.reduce((min, freight) => {
        return parsefloat(freight.lead_time.replace("h", "")) <
          parsefloat(min.lead_time.replace("h", ""))
          ? freight
          : min;
      });
    },
  },
};
</script>