<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  names: string[];
  looser: string | null;
}>();

const emit = defineEmits(['remove', 'pick-looser']);

function isDuplicate(name: string) {
  return props.names.filter(n => n === name).length > 1;
}

function handleRemove(name: string) {
  emit('remove', name);
}

function handlePickLooser() {
  emit('pick-looser');
}
</script>

<template>
  <div>
    <div class="name-list">
      <span
        v-for="(name, index) in names"
        :key="index"
        :class="['list', isDuplicate(name) ? 'duplicate' : '']"
        @click="handleRemove(name)"
      >
        {{ name }}
      </span>
    </div>

    <div v-if="names.length >= 2 && !looser">
      <button class="check-btn" @click="handlePickLooser">Check the looser</button>
    </div>
  </div>
</template>
