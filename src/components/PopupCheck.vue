<script setup lang="ts">

import {computed, inject, ref} from "vue";
import {Game} from "@/core/Game";

const game = Game.currentGame;

const openCheck = inject('openCheck');
const correct = inject('correct');
let formatted = inject('formatted');
let result = inject('result');
let correctResult = inject('correctResult');

function nextTask() {
  const formattedTask = game.getTask();
  const correct = game.correctAnswer().task;

  formatted.value = formattedTask.task.split(' ').map((task) => {
    if (task === '_') {
      return {item: '', isInput: true}
    }
    return {item: task, isInput: false}
  });
  result.value.result = formattedTask.result;
  correctResult.value = correct;
}

</script>

<template>
  <div class="block_popup" v-show="openCheck">
    <div class="container_popup">
      <div class="popup">
        <div v-if="correct">
          <p class="title">Верно!</p>
        </div>
        <div v-else>
          <p>Задача не решена.</p>
          <p>Верное решение: </p>
          <p>{{ correctResult }}</p>
        </div>
      </div>
      <img @click="nextTask(); openCheck = false" src="/icons/cancel.svg" alt="">
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