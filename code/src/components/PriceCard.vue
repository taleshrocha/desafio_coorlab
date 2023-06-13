<template>
  <div class="grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 text-secondary font-semibold text-2xl">

    <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:col-span-2 
        border-2 rounded-lg border-secondary p-4">
      <img class="md:-my-4 md:-mx-2" :src="require(`../../assets/${imageName}`)" width="500" height="500" />

      <div class="md:col-span-2 p-2 md:-ml-4">
        <h3 class="font-bold text-3xl text-primary text-shadow">{{ title }}</h3>
        <p class="mt-4 ml-4">Transportadora: {{ name }}</p>
        <p class="ml-4">Tempo Estimado: {{ time }}</p>
        <h3 class="md:hidden font-bold text-primary text-shadow text-3xl mt-4">Preço</h3>
        <p class="md:hidden mt-4 ml-4">{{ price }}</p>
      </div>
    </div>

    <div class="hidden md:inline-block border-2 border-secondary rounded-lg p-4">
      <h3 class="font-bold text-primary text-shadow text-3xl">Preço</h3>
      <p class="mt-4 ml-4">{{ price }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    price: String,
    time: String,
    imageName: String,
  },
};
</script>
