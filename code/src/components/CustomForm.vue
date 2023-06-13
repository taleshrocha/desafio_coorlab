<template>
    <div>
        <form class="flex flex-col justify-center border-2 border-secondary rounded-lg p-4 text-secondary font-semibold"
            @submit="onSubmit">
            <h1 class="text-3xl font-bold">Insira o destino e o peso</h1>

            <div class="flex flex-col mt-4">
                <label for="input-1" class="text-xl">Destino*</label>
                <select id="input-1" v-model="cityName"
                    class="rounded-full border-secondary focus:ring-primary focus:border-primary mt-1.5 py-2 px-4">
                    <option value="" disabled selected>Selecione o destino</option>
                    <option v-for="city in cities" :value="city" :key="city">{{ city }}</option>
                </select>
            </div>

            <div class="flex flex-col mt-4">
                <label for="input-2" class="text-xl">Peso (kg)*</label>
                <input id="input-2" type="text" v-model="loadWeight"
                    class="rounded-full focus:ring-primary focus:border-primary mt-1.5 py-2 px-4"
                    placeholder="Insira o peso"/>
            </div>

            <button class="rounded-full bg-primary border-0 p-2 font-bold text-white mt-4" type="submit">Analisar</button>
        </form>

        <transition enter-active-class="duration-300 ease-out" leave-active-class="duration-200 ease-in"
            enter-class="opacity-0" leave-to-class="opacity-0">
            <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="bg-background rounded-lg p-8 flex flex-col items-center justify-center space-y-4 border-2 border-secondary">
                    <span class="text-red-500 font-bold text-6xl p-4 border-4 border-red-500 rounded-lg">!</span>
                    <h2 class="text-xl font-bold mb-4 text-secondary">Preencha todos os campos e insira valores válidos</h2>
                    <button class="rounded-full bg-primary border-0 p-2 font-bold text-white w-full"
                        @click="$event => this.showModal = false">Fechar</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        cities: Array,
    },
    data() {
        return {
            cityName: '',
            loadWeight: '',
            showModal: false,
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            if (this.cityName && !isNaN(this.loadWeight) && this.loadWeight > 0) {
                this.$emit('form-submitted', {
                    cityName: this.cityName,
                    loadWeight: this.loadWeight,
                });
            } else {
                this.showModal = true;
            }
        },
    },
};
</script>
