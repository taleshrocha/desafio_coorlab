<template>
    <form class="flex flex-col justify-center border-2 border-secondary rounded-lg p-4 text-secondary" @submit="onSubmit">
        <h1 class="text-3xl font-bold">Insira o destino e o peso</h1>

        <div class="flex flex-col mt-4">
            <label for="input-1" class="text-sm font-medium">Destino*</label>
            <select id="input-1" v-model="cityname"
                class="rounded-full border-gray-300 focus:ring-primary focus:border-primary mt-1.5 p-2">
                <option value="" disabled selected>Selecione o destino</option>
                <option v-for="city in cities" :value="city" :key="city">{{ city }}</option>
            </select>
        </div>

        <div class="flex flex-col mt-4">
            <label for="input-2" class="text-sm font-medium text-gray-700">Peso*</label>
            <input id="input-2" type="text" v-model="loadweight"
                class="rounded-full border-gray-300 focus:ring-primary focus:border-primary mt-1.5 p-2"
                placeholder="Insira o peso" required>
        </div>

        <button class="rounded-full bg-primary border-0 p-2 font-bold text-white mt-4" type="submit">Analisar</button>
    </form>
</template>

<script>
export default {
    props: {
        cities: [],
    },
    data() {
        return {
            cityname: '',
            loadweight: 0,
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            // Add your form submission logic here
        },
    },
};
</script>