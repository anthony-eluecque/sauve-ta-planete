<template>
    <v-card class="home-card">
        <input type="checkbox" class="checkbox" id="toggle-mode" @click="switchTheme">
        <label for="toggle-mode" class="toggle">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </label>
        <span class="capystreak text_shadows" v-if="streak >= 3">CAPYSTREAK<br>x{{ streak - 2 }}</span>
        <v-img class="planet-img easter-egg-1-plan" :src='`/planets/${planetNum}planete.svg`' @click="showEasterEgg"></v-img>
        <v-img v-show="showEasterEgg1" class="easter-egg-1" src="/easter-egg1.png"></v-img>
        <v-dialog v-model="gameLose" width="800">
            <v-card  class="rounded-xl question-card py-6" color="card-back-color">
                <v-card-title>Vous avez perdu.</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text__container">
                    Votre planète n'est plus vivable, bravo !<br><br>
                    <v-btn @click="replay">Rejouer</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row no-gutters class="d-flex justify-center my-6">
            <span class="text-h4 mr-2 font-weight-bold" style="line-height: 60px; color: white;">{{ score }}</span>
            <img width="55" height="55" :src="coin"/>
        </v-row>
        <QuestionCard class="mt-10" :question="actuQuest" @result="getResult" v-if="!showReponse"/>
        <v-dialog v-model="showReponse" width="800">
            <v-card  class="rounded-xl question-card py-6" color="card-back-color">
                <v-card-title v-if="reponseValue">Bravo</v-card-title>
                <v-card-title v-else>Dommage</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text__container">{{ actuQuest.explication }}</v-card-text>
                <v-card-text class="text__container">source : <a :href="actuQuest.source" target="_blank">{{ actuQuest.source }}</a>
                <br><br>
                <v-btn @click="nextQuest">Question suivante</v-btn>
            </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script lang="ts" setup>
import QuestionCard from '@/components/cards/QuestionCard.vue';
import { ref, computed, type Ref } from 'vue';
import { questions, type Question } from '@/data/questions';
import { useTheme } from 'vuetify';
import router from '@/router';

const score = ref(0)
const precedQuest: Ref<Array<Question>> = ref([])
const streak = ref(0)
const actuQuest = ref(questions[Math.floor(Math.random() * questions.length)])
const theme = useTheme()
theme.global.name.value = 'darkTheme'
const planetPos = ref(7)
const planetValue = ['8', '7', '6', '5', '4', '3', '2', '1']
const gameLose = ref(false)
const showReponse = ref(false)
const reponseValue = ref(false)

const planetNum = computed(() => {
    return planetValue[Math.floor(planetPos.value / 2)]
})

const coin = computed(() => {
    if (score.value === 130) return '/bowling.png';
    if (streak.value >= 3 ) return '/capystreak.png';
    return '/coin.png';
})

function getResult(result: boolean):void {
    reponseValue.value = true
    showReponse.value = true
    if (result === actuQuest.value.reponse){
        if (planetPos.value < 15) planetPos.value += 1
        if (streak.value >= 4 ) score.value += 1 + streak.value - 3
        else score.value += 1
        if (streak.value < 12 ) streak.value += 1
    }
    else {
        streak.value = 0
        if (score.value - 3 <= 0)score.value = 0
        else score.value -= 3
        if (planetPos.value > 1) planetPos.value -= 1
        else {
            console.log('perdu')
            gameLose.value = true
        }
    }
    precedQuest.value.unshift(actuQuest.value)
    if (precedQuest.value.length > 5) precedQuest.value.pop()
    
}

function nextQuest() {
    showReponse.value = false
    actuQuest.value = questionsChoice.value[Math.floor(Math.random() * questionsChoice.value.length)]
    console.log(actuQuest.value.reponse)
}


const switchTheme = (event : any) => {
    // Now you can access event properties, such as event.target.checked
    let isEven : string|boolean = event.target.checked ? 'even' : 'odd';
    isEven = isEven === 'even';
    if (isEven ){
      theme.global.name.value = 'lightTheme'
    } else {
      theme.global.name.value = 'darkTheme'
    }
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

function replay(): void {
  router.go();
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


.checkbox {
  opacity : 0;
  position: absolute;
}

.checkbox:checked + .toggle {
  background-color: #ffcb05;
  box-shadow: none;
}

.checkbox:checked + .toggle {
  transform: rotateY(180deg);
}

.checkbox:checked + .toggle ul {
  display: none;
}

.toggle {
  top: 10px;
  display: flex;
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 50px;
  box-shadow: -8px -7px inset #ddd;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease-in;
  transform-style: preserve-3d;
}

.toggle li {
  list-style: none;
  border-radius: 50px;
  background-color: #bbb;
  position: absolute;
}

.toggle li:first-child {
  width: 5px;
  height: 5px;
  left: 10px;
  top: 20px;
}

.toggle li:nth-child(2) {
  width: 10px;
  height: 10px;
  left: 25px;
  top: 25px;
}

.toggle li:nth-child(3) {
  width: 5px;
  height: 5px;
  left: 30px;
  top: 10px;
}

.toggle li:nth-child(4) {
  width: 5px;
  height: 5px;
  left: 40px;
  top: 20px;
}

.toggle li:nth-child(5) {
  width: 5px;
  height: 5px;
  left: 20px;
  top: 5px;
}

.toggle li:nth-child(6) {
  width: 5px;
  height: 5px;
  left: 10px;
  top: 35px;
}

.toggle li:nth-child(7) {
  width: 5px;
  height: 5px;
  left: 30px;
  top: 40px;
}
</style>