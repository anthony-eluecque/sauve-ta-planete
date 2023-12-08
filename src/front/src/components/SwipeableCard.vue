<template>
    <div
      ref="interactElement"
      :style="{
        transform: transformString,
        transition: transitionString,
        touchAction: 'none',
      }"
    >
      <slot />
    </div>
  </template>
  
<script setup>
import { defineProps, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import interact from "interactjs";
  
const INTERACT_ON_START = "start";
const INTERACT_ON_MOVE = "move";
const INTERACT_ON_END = "end";

const SWIPE_LEFT = "swipe-left";
const SWIPE_RIGHT = "swipe-right";
const SWIPE_ANY = "swipe";

const isDragging = ref(true);
let interactPosition = ref({
    x: 0,
    y: 0,
    rotation: 0,
})
const interactElement = ref(null);

const props = defineProps({
    transition: {
        type: String,
        default: "transform 0.5s cubic-bezier(0.2, 0.8, 0.4, 1.2)",
        required: false,
    },
    maxRotation: {
        type: Number,
        default: 15,
        required: false,
    },
    thresholdX: {
        type: Number,
        default: 50,
        required: false,
    },
    thresholdY: {
        type: Number,
        default: 70,
        required: false,
    },
})

const emit = defineEmits(["swipe-left", "swipe-right", "swipe-top", "swipe-bottom", "swipe", "start", "move", "end"])

const transformString = computed(() => {
    const { x, y, rotation } = interactPosition.value;
    return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
})

const transitionString = computed(() => {
    return !isDragging.value && props.transition;
})

function onThresholdReached(interaction) {

    setPosition({
        x: 0,
        rotation: 0,
    });

    switch (interaction) {
        case SWIPE_RIGHT:
            emit(SWIPE_RIGHT);
            break;
        case SWIPE_LEFT:
            emit(SWIPE_LEFT);
            break;
        default:
            return
    }
    emit(SWIPE_ANY, interaction);
}

function setPosition(position) {
    const x = position.x || 0;
    const y = position.y || 0;
    const rotation = position.rotation || 0;
    interactPosition.value = { x, y, rotation };
}

function unsetInteractElement() {
    interact(interactElement.value).unset();
}
  

onMounted(() => {
    const element = interactElement.value;
    interact(element).draggable({
        onstart: () => {
            emit(INTERACT_ON_START);
            isDragging.value = true;
        },
        onmove: (event) => {
            emit(INTERACT_ON_MOVE);
            const maxRotation = props.maxRotation;
            const thresholdX = props.thresholdX;
            const x = interactPosition.value.x + event.dx;
            const y = interactPosition.value.y + event.dy;
            let rotation = maxRotation * (x / thresholdX);
            if (rotation > maxRotation) rotation = maxRotation;
            else if (rotation < -maxRotation) rotation = -maxRotation;

            setPosition({ x, y, rotation });
        },
        onend: () => {
            emit(INTERACT_ON_END);
            const x = interactPosition.value.x;
            const thresholdX = props.thresholdX;

            isDragging.value = false;

            if (x > thresholdX) onThresholdReached(SWIPE_RIGHT);
            else if (x < -thresholdX) onThresholdReached(SWIPE_LEFT);
            else setPosition({ x: 0, y: 0, rotation: 0 });
        },
    });
});

onBeforeUnmount(() => {
    unsetInteractElement();
});
</script>