<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Game} from "@/stores/Game";

const minute = ref(0);
const second = ref(0);

onMounted(() => {
  setInterval(() => {
    minute.value = Game.currentGame.timer.minute;
    second.value = Game.currentGame.timer.second;
  }, 1000)
})

</script>

<template>
  <div class="timer">
    <p class="title_timer">{{ minute }} : {{ second }}</p>
  </div>
</template>

<style scoped>
.title_timer {
  font-weight: 600;
  margin: 0;
}

.timer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60px;
  height: 30px;
  border: 2px solid #5395e7;
  border-right: 20px solid #5395e7;
  background-color: #f5f5f5;
  padding-right: 10px;
}
</style>