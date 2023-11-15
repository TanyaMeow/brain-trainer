<script setup lang="ts">

import {computed, inject, ref} from "vue";
import {Game} from "@/core/Game";
import type {TaskInterface} from "@/interface/TaskInterface";

const game = Game.currentGame;

const openCheck = inject<boolean>('openCheck');
const correct = inject<boolean>('correct');
let formatted = inject<TaskInterface>('formatted');
let result = inject<TaskInterface>('result');
let correctResult = inject<string>('correctResult');
const stopGame = inject('stopGame');

function nextTask() {
  const currentTask = game.getTask();
  const correct = game.correctAnswer();

  formatted.value = currentTask?.formatted.split(' ').map((task) => {
    if (task === '_') {
      return {item: '', isInput: true}
    }
    return {item: task, isInput: false}
  });
  result.value.result = currentTask.result;
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

        <div class="container_button">
          <RouterLink to="/">
            <button class="game_over" @click="stopGame">Закончить игру</button>
          </RouterLink>
          <button class="next_task" @click="nextTask(); openCheck = false">Следующая задача</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.title {
  font-size: 24px;
}

p {
  text-align: center;
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

  background-color: #f0f5ff;
  border: 2px solid #5373b6;
  border-radius: 5px;

  width: 300px;
  height: 200px;
}

.game_over {
  height: 30px;

  margin-left: 10px;
  margin-right: 40px;

  border-radius: 5px;
  border: 1px solid red;
  background-color: #ffd1d1;
}

.next_task {
  height: 30px;

  border-radius: 5px;
  border: 1px solid #0200ff;
  background-color: #d1d3ff;
}

img {
  position: absolute;
  top: 173px;
  right: 63px;
}

</style>