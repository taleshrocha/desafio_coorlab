<template>
    <form class="flex flex-col justify-center border-2 border-secondary rounded-lg p-4">
        <h1 class="text-3xl font-bold">Insira o destino e o peso</h1>

        <div class="flex flex-col mt-4">
            <label for="input-1" class="text-sm font-medium text-gray-700">Destino*</label>
            <!--
                <select id="input-1" v-model="form.cityName"
                class="rounded-pill border-gray-300 focus:ring-primary focus:border-primary mt-1.5 p-2">
                <option value="" disabled selected>Selecione o destino</option>
                <option v-for="city in cities" :value="city">{{ city }}</option>
            </select>
        -->
            <div v-if="validation" class="text-sm text-red-500">Your user ID must be 5-12 characters long.</div>
        </div>

        <div class="flex flex-col mt-4">
            <label for="input-2" class="text-sm font-medium text-gray-700">Peso*</label>
            <input id="input-2" type="text" v-model="loadWeight"
                class="rounded-pill border-gray-300 focus:ring-primary focus:border-primary mt-1.5 p-2"
                placeholder="Insira o peso" required>
        </div>

        <button class="rounded-pill bg-primary border-0 p-2 font-bold text-white mt-4" type="submit">Analisar</button>
    </form>
</template>

<script>
export default {
    props: {
        cities: [],
        cityname: String,
        loadweight: String,
    },
    onsubmit(event) {
        event.preventdefault();
    }
};
</script>