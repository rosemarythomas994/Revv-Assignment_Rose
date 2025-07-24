<script setup lang="ts">
import { ref } from 'vue';
import NameList from './NameList.vue';
import ResultDisplay from './ResultDisplay.vue';

const newName = ref('');
const names = ref<string[]>([]);
const looser = ref<string | null>(null);
const errorMsg = ref('');
const showResult = ref(false);

function addName() {
  const name = newName.value.trim();
  errorMsg.value = '';
  if (!name) {
    errorMsg.value = 'Sorry, no empty name';
    return;
  }
  if (names.value.includes(name)) {
    errorMsg.value = 'Sorry, names must be unique';
    return;
  }
  names.value.push(name);
  newName.value = '';
}

function removeName(name: string) {
  names.value = names.value.filter(n => n !== name);
  if (looser.value === name) looser.value = null;
}

function pickLooser() {
  const random = names.value[Math.floor(Math.random() * names.value.length)];
  looser.value = random;
  showResult.value = true;
}

function pickAnother() {
  let newRandom;
  do {
    newRandom = names.value[Math.floor(Math.random() * names.value.length)];
  } while (newRandom === looser.value);
  looser.value = newRandom;
}

function reset() {
  names.value = [];
  looser.value = null;
  errorMsg.value = '';
  showResult.value = false;
}
</script>

<template>

  <div class="container">
    <div v-if="!showResult">
      <h1 class="heading">Who pays the bill</h1>

      <div class="input-group">
        <input v-model="newName" @keyup.enter="addName" placeholder="Enter name" />
        <button @click="addName">Add</button>
      </div>

      <div v-if="errorMsg" class="error">{{ errorMsg }}</div>

      <NameList :names="names" :looser="looser" @remove="removeName" @pick-looser="pickLooser" />
    </div>

    <ResultDisplay v-else :looser="looser" @restart="reset" @pick-another="pickAnother" />
  </div>
</template>



<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Bradley Hand ITC', 'Segoe Print', 'Lucida Handwriting', cursive, sans-serif;
  padding: 20px;
  width: 100%;
  max-width: 400px;
}



.heading {
  font-size: 2rem;
  color: rgb(250, 8, 137);
  border-bottom: 2px solid #00aee3;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.input-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 100%;
  gap: 10px
}

input {
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  font-size: 16px;
}

button {
  background-color: #00aee3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 16px;
}

.error {
  color: red;
  margin-top: 5px;
  font-weight: bold;
}

.name-list {
  margin-top: 15px;
}

.list {
  display: inline-block;
  background-color: #00aee3;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  margin: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.list:hover {
  background-color: #484652;
  /* darker blue or your preferred color */
}

.duplicate {
  background-color: orange;
}

.check-btn {
  margin-top: 20px;
  background: none;
  border: 2px solid hotpink;
  color: hotpink;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.result {
  margin-top: 30px;
}

.clean-result .fontstyle {
  font-size: 2.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

.clean-result .looser-name {
  font-size: 2.5rem;
  color: #00aee3;
  font-weight: bold;
  margin: 10px 0;
}

.clean-result .buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.restart,
.next {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid;
  background: none;
  cursor: pointer;
  font-size: 14px;
}

.restart {
  color: hotpink;
  border-color: hotpink;
}

.next {
  color: #00aee3;
  border-color: #00aee3;
}
</style>