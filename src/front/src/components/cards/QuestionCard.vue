<template>
    <v-card class="question-card py-6" color="card-back-color">
        <span class="d-block text-center text-h5 mx-6">{{ props.question.question }}</span>
        <v-divider class="mx-6 my-4" :thickness="5" style="opacity: 100% !important;"></v-divider>
        <v-row no-gutters class="mx-6 mt-6">
            <v-col cols="6">
                <v-btn class="choice-btn" color="button-back-color" @click="falseResult">
                    <v-icon icon="mdi-close" color="button-text-color" size="x-large"></v-icon>
                </v-btn>
            </v-col>
            <v-col cols="6" align="right">
                <v-btn class="choice-btn" color="button-back-color">
                    <v-icon icon="mdi-check" color="button-text-color" size="x-large"></v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import { type Question } from '@/data/questions';
const props = defineProps({
    question: {
        type: Object as () => Question,
        required: true
    }
});

function falseResult() {
    console.log(false)
}
</script>

<style lang="stylus">
@import '../../styles/components/question-card'
</style>