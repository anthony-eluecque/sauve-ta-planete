<template>
    <v-card class="home-card">
        <v-img class="planet-img" src="/planet.png"></v-img>
        <v-row no-gutters class="d-flex justify-center my-6">
            <span class="text-h4 mr-2 font-weight-bold" style="line-height: 60px; color: white;">{{ score }}</span>
            <img width="55" height="55" :src="coin"/>
        </v-row>
        <QuestionCard class="mt-16"/>
    </v-card>
</template>

<script lang="ts" setup>
import QuestionCard from '@/components/cards/QuestionCard.vue';
import { ref, computed, type Ref, type ComputedRef } from 'vue';

const score: Ref<number> = ref(131)

const coin: ComputedRef<string> = computed(() => {
    if (score.value === 130){
        return '/bowling.png';
    }
    return '/coin.png';
})
</script>

<style lang="stylus">
@import "../src/styles/variables.styl"
body {
    background-color: $main-back-color;
}

.home-card {
    background: url('/pattern.png') repeat;
    background-color: black;
    height: 96vh;
    margin: 2vh auto;
    border-radius: 50px;
    max-width: 450px;
    border: 4px white solid;
}

.planet-img {
    max-height: 35vh;
    height: 100%;
    margin-top: 30px;
}
</style>