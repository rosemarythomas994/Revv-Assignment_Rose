<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  looser: string | null;
}>();

const emit = defineEmits(['restart', 'pick-another']);

function handleRestart() {
  emit('restart');
}

function handlePickAnother() {
  emit('pick-another');
}
</script>

<template>
  <div class="result clean-result">
    <div class="fontstyle">The looser is:</div>
    <div class="looser-name">{{ looser }}</div>
    <div class="buttons">
      <button class="restart" @click="handleRestart">Start over</button>
      <button class="next" @click="handlePickAnother">Don't like it, get a new name</button>
    </div>
  </div>
</template>
