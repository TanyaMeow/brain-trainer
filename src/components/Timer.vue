<script setup lang="ts">

import {ref} from "vue";
import {Game} from "@/stores/Game";

const minute = ref(Game.currentGame.timer.minute);
const second = ref(Game.currentGame.timer.second);

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