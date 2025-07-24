
<script lang="ts">
import { defineComponent } from 'vue';
import WhoFails from './components/WhoFails.vue';
import ResultDisplay from './components/ResultDisplay.vue';
import NameList from './components/NameList.vue';

export default defineComponent({
  name: 'App',
  components:{
    WhoFails,
    ResultDisplay,
    NameList,
  },
});
</script>
<template>
  <div class="app-container">
    <WhoFails />
  </div>

</template>
<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}


.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
