<template>
    <v-card class="home-card">
        <span class="capystreak text_shadows" v-if="streak >= 3">CAPYSTREAK<br>x{{ streak - 2 }}</span>
        <v-img class="planet-img easter-egg-1-plan" :src='`/planets/${planetNum}planete.svg`' @click="showEasterEgg"></v-img>
        <v-img v-show="showEasterEgg1" class="easter-egg-1" src="/easter-egg1.png"></v-img>
        <v-row no-gutters class="d-flex justify-center my-6">
            <span class="text-h4 mr-2 font-weight-bold" style="line-height: 60px; color: white;">{{ score }}</span>
            <img width="55" height="55" :src="coin"/>
        </v-row>
        <QuestionCard class="mt-10" :question="actuQuest" @result="getResult"/>
    </v-card>
</template>

<script lang="ts" setup>
import QuestionCard from '@/components/cards/QuestionCard.vue';
import { ref, computed, type Ref } from 'vue';
import { questions, type Question } from '@/data/questions';

const score = ref(0)
const precedQuest: Ref<Array<Question>> = ref([])
const streak = ref(0)
const actuQuest = ref(questions[Math.floor(Math.random() * questions.length)])
const planetPos = ref(7)
const planetValue = ['8', '7', '6', '5', '4', '3', '2', '1']
const gameLose = ref(false)

const planetNum = computed(() => {
    return planetValue[Math.floor(planetPos.value / 2)]
})

const coin = computed(() => {
    if (score.value === 130) return '/bowling.png';
    if (streak.value >= 3 ) return '/capystreak.png';
    return '/coin.png';
})

function getResult(result: boolean):void {
    if (result === actuQuest.value.reponse){
        if (planetPos.value < 15) planetPos.value += 1
        if (streak.value >= 4 ) score.value += 1 + streak.value - 3
        else score.value += 1
        if (streak.value < 12 ) streak.value += 1
    }
    else {
        streak.value = 0
        if (planetPos.value > 1) planetPos.value -= 1
        else {
            console.log('perdu')
            gameLose.value = true
        }
    }
    precedQuest.value.unshift(actuQuest.value)
    if (precedQuest.value.length > 5) precedQuest.value.pop()
    actuQuest.value = questionsChoice.value[Math.floor(Math.random() * questionsChoice.value.length)]
    console.log(actuQuest.value.reponse)
}

const questionsChoice = computed(() => {
    return questions.filter((existingQuestion: Question) => !precedQuest.value.includes(existingQuestion));
})

const showEasterEgg1: Ref<boolean> = ref(false);
const showEasterEgg = () => {
  showEasterEgg1.value = true;
  setTimeout(() => {
    showEasterEgg1.value = false;
  }, 2000);
}

</script>

<style lang="stylus">
@import "../src/styles/global.styl"

.home-card {
    background: url('/pattern.png') repeat;
    background-color: black;
    height: 96vh;
    margin: 2vh auto;
    border-radius: 50px;
    max-width: 450px;
    padding: 0 20px;
    border: 4px white solid;
}

.planet-img {
    max-height: 35vh;
    height: 100%;
    margin-top: 30px;
}

.capystreak {
    font-weight: bolder;
    color: red;
    font-size: 1.8rem;
    line-height: 1.9rem;
    position absolute;
    top: 9vh;
    right: 5vh;
    z-index: 100;
    text-align: center;
    text-shadow: 1px 1px 2px red, 0 0 1em black, 0 0 0.2em black;
    transition: font-size 0.3s ease-in-out;
    letter-spacing: 0.1rem;
}

.text_shadows {
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  text-transform: uppercase;
  animation: move 0.8s ease-in infinite;
}

.planet-img {
    max-height: 35vh;
    height: 100%;
    margin-top: 30px;
}

.planet-img:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.1);
    transform: rotateZ(360deg);
}

.planet-img {
    transition: 1s;
    transform: scale(1);
    transform: rotateZ(0deg);
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(0, -12px);
  }
  50% {
    transform: translate(0, -12px);
    font-size: 2rem;
  }
  60% {
    transform: translate(0, -12px);
  }
  100% {
    transform: translate(0px, 0px);
    font-size: 1.8rem;
  }
}
</style>