<template>
  <b-row>
    <b-col md="9">
      <b-card no-body class="h-100">
        <b-row no-gutters>
          <b-col
            md="2"
            class="bg-info d-flex justify-content-center align-items-center"
          >
            <b-icon class="w-50 h-50" icon="cash-coin"></b-icon>
          </b-col>

          <b-col md="10">
            <b-card-body>
              <b-card-title class="font-weight-bold text-capitalize">{{
                title
              }}</b-card-title>
              <b-card-text class="m-0"
                >Transportadora: {{ shipping }}</b-card-text
              >
              <b-card-text class="m-0">Tempo Estimado: {{ time }}</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-col>

    <b-col md="3">
      <b-card no-body class="h-100">
        <b-card-body>
          <b-card-title class="font-weight-bold text-capitalize"
            >Preço</b-card-title
          >
          <b-card-text>Preço: R$ {{ price }}</b-card-text>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: String,
    shipping: String,
    price: String,
    time: String, // TODO: make this to be Time
  },
};
</script>
