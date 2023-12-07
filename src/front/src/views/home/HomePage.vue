<template>
    <ScoreBar/>
    <QuestionCard/>
</template>

<script setup>
import QuestionCard from '@/components/cards/QuestionCard.vue';
import ScoreBar from '@/components/menu/ScoreBar.vue';
</script>

<style lang="stylus">
@import "../src/styles/variables.styl"
body {
    background-color: $main-back-color;
}

</style>