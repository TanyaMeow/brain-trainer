<script setup lang="ts">

import {inject} from "vue";
import {Game} from "@/stores/Game";

const game = Game.currentGame;
const correctTask = game.correctAnswer().task;

const open = inject('open');
const correct = inject('correct');

</script>

<template>
  <div class="block_popup" v-show="open">
    <div class="container_popup">
      <div class="popup">
        <div v-if="correct">
          <p class="title">Верно!</p>
        </div>
        <div v-else>
          <p>Задача не решена.</p>
          <p>Верное решение: {{ correctTask }}</p>
        </div>
      </div>
      <img @click="open = false" src="/icons/cancel.svg" alt="">
    </div>
  </div>
</template>

<style scoped>

.title {
  font-size: 24px;
}

.block_popup {
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 524px;
}

.container_popup {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f0f5ff;
  border: 2px solid #5373b6;
  border-radius: 5px;

  width: 300px;
  height: 200px;
}

img {
  position: absolute;
  top: 173px;
  right: 63px;
}

</style>