<template>
    <SwipeableCard v-on:swipe="onSwipe">
    <v-card class="question-card py-6" color="card-back-color">
        <v-dialog
            v-model="dialog"
            width="800"
            >
            <template v-slot:activator="{ props }">
                <v-btn class="information-button" v-bind="props"  rounded>
                    <v-icon icon="mdi-information-variant" size="xx-large"></v-icon>
                </v-btn>
            </template>
            <v-card  class="rounded-xl question-card py-6" color="card-back-color">
                <v-card-title>
                    <v-btn @click="dialog = false">
                        <v-icon icon="mdi-arrow-left-thin" size="xx-large"></v-icon>
                    </v-btn>
                    <br><br>
                    <span class="text-wrap text-h5 title__container">{{ article_text?.titre }}</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text__container">
                    {{ article_text?.content }}
                    
                    <br> <br>
                    <h3>Les sources : </h3>
                    <a :href="article" v-for="(article,i) in article_text?.sources" :key="i"> <br> <p class="source__text"> {{ article }}</p> </a>
                </v-card-text>
            </v-card>
        </v-dialog>
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

    </SwipeableCard>
</template>

<script setup lang="ts">
import SwipeableCard from '../SwipeableCard.vue';
import { type Question } from '@/data/questions';
import { type Article, articles } from '@/data/articles'
import { computed, ref } from 'vue';
const props = defineProps({
    question: {
        type: Object as () => Question,
        required: true
    }
});

const dialog = ref(false)
const article_text = computed(() => articles.find((article : Article) => article.theme == props.question.theme[0]))


function falseResult() {
    console.log(false)
}

const emit = defineEmits<{
    (e: 'result', value: boolean):void
}>();

function onSwipe(direction: string): void {
    if (direction === 'swipe-left') emit('result', false)
    else emit('result', true)
}
</script>

<style lang="stylus">
@import '../../styles/components/question-card'
</style>

<script setup lang="ts">

</script>