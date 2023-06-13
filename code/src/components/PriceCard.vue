<template>
  <div class="grid grid-cols-3 gap-4 text-secondary font-semibold text-2xl">

    <div class="grid grid-cols-3 col-span-2 border-2 rounded-lg border-secondary">
      <p class="bg-primary">*</p>

      <div class="col-span-2 p-4">
        <h3 class="font-bold text-3xl text-primary text-shadow">{{ title }}</h3>
        <p class="mt-4 ml-4">Transportadora: {{ shipping }}</p>
        <p class="ml-4">Tempo Estimado: {{ time }}</p>
      </div>
    </div>

    <div class="border-2 border-secondary rounded-lg p-4">
      <h3 class="font-bold text-primary text-shadow text-3xl">Preço</h3>
      <p class="mt-4 ml-4">{{ price }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    shipping: String,
    price: String,
    time: String,
    iconName: String,
  },
};
</script>
