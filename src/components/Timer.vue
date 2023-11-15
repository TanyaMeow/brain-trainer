<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Game} from "@/core/Game";
import router from "@/router";

const game = Game.currentGame;

const minute = ref(0);
const second = ref(0);

onMounted(() => {
  const timer = setInterval(() => {
    minute.value = game.timer.minute;
    second.value = game.timer.second;

    if (game.timer.gameOver) {
      game.timer.stopTimer();
      clearInterval(timer);
      game.updateHistory();
      router.push({path: '/'});
    }
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