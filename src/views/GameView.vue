<script setup lang="ts">

import Timer from "@/components/Timer.vue";
import {onMounted, provide, ref} from "vue";
import {Game} from "@/core/Game";
import PopupCheck from "@/components/PopupCheck.vue";
import PopupSolution from "@/components/PopupSolution.vue";
import type {TaskInterface} from "@/interface/TaskInterface";
import type {FormattedInterface} from "@/interface/FormattedInterface";

const game: Game = Game.currentGame;

const currentTask = ref<TaskInterface>(game.currentTask);
const formatted = ref<FormattedInterface[]>(currentTask.value?.formatted.split(' ').map((task: string) => {
  if (task === '_') {
    return {item: '', isInput: true}
  }
  return {item: task, isInput: false}
}));

const currentIndex = ref<number>(0);
const activeInput = ref<number>(0);
const inputs = ref<HTMLInputElement[]>([]);
const openCheck = ref<boolean>(false);
const openSolution = ref<boolean>(false);
const correct = ref<boolean>(false);
const correctResult = ref<string>(game.correctAnswer());

onMounted(() => {
  inputs.value[0].focus();
});

function setCurrentIndex(index: number): void {
  currentIndex.value = index;
}

function setTask(digit: number): void {
  formatted.value[currentIndex.value].item += String(digit);
}

function nextInput(): void {
  if (activeInput.value < formatted.value.length) {
    activeInput.value += 2;
  }
  inputs.value[activeInput.value].focus();
}

function prevInput(): void {
  if (activeInput.value < 2) return
  activeInput.value -= 2;

  inputs.value[activeInput.value].focus();
}

function stopGame(): void {
  game.stopGame();
  game.updateHistory();
}

provide('openCheck', openCheck);
provide('openSolution', openSolution);
provide('correct', correct);
provide('formatted', formatted);
provide('result', currentTask);
provide('correctResult', correctResult);
provide('stopGame', stopGame);

</script>

<template>
  <PopupCheck/>
  <PopupSolution/>
  <main>
    <div class="header">
      <RouterLink to="/">
        <button class="cancel" @click="stopGame"><img src="/icons/cancel.svg" alt="">Отмена</button>
      </RouterLink>
      <Timer/>
    </div>
    <div class="example">
      <p class="container_task" v-for="(task, index) of formatted" :key="index">
        <input :ref="el => inputs[index] = el as HTMLInputElement" v-if="task.isInput" type="number" class="hidden" :value="task.item"
               @focus="setCurrentIndex(index)" @input="task.item = ($event.target as HTMLInputElement).value">
        <p v-else>
          {{ task.item }}
        </p>
      </p>
    </div>
    <div class="result">
      <p class="correct_result">= {{ currentTask.result }} ?</p>
    </div>
    <div class="actions">
      <div class="actions_number">
        <button class="number" v-for="num of 9" @click="setTask(num)" @mousedown="(e) => e.preventDefault()">{{ num }}</button>
        <div></div>
        <button class="number" @click="setTask(0)" @mousedown="(e) => e.preventDefault()">0</button>
      </div>
      <div class="actions_users">
        <button class="action" @click="prevInput" @mousedown="(e) => e.preventDefault()"><img src="/icons/arrow_back.svg" alt=""></button>
        <button class="action" @click="nextInput" @mousedown="(e) => e.preventDefault()"><img src="/icons/arrow_forward.svg" alt=""></button>
        <button class="action" @mousedown="(e) => e.preventDefault()" @click="openSolution = true"> ?</button>
        <button class="action"
                @click="openCheck = true; correct = game.checkAnswer(formatted.map(item => item.item).join(' '))"> =
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  height: 15px;
}

main {
  margin-top: 30px;
  width: 400px;
}

@media (max-width: 450px) {
  main {
    width: 350px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cancel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 34px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #9f9f9f;
  box-shadow: 0 2px 2px 0 rgba(148, 148, 148, 0.53);

  & img {
    margin-right: 5px;
  }
}

.example {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
}

.result {
  display: flex;
  justify-content: center;
}

.correct_result {
  margin: 0;
  color: #bfbfbf;
  font-weight: 600;
}

.hidden {
  background: transparent;
  border: transparent;
  border-bottom: 1px solid #bfbfbf;
  color: black;
  font-size: 16px;
  max-width: 30px;
  text-align: center;
  font-weight: 600;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

p {
  font-weight: 600;
  margin: 4px;
}

.hidden:focus {
  outline: none;
  border-bottom: 1px solid black;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.actions_number {
  display: grid;
  grid-template-columns: repeat(3, 40px);
  gap: 25px;
  margin-right: 25px;
}

.number {
  background-color: #f7724d;
  width: 50px;
  height: 50px;
  border: transparent;
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(150, 145, 145, 0.53);
}

.number:hover {
  background-color: #de613f;
  cursor: pointer;
  transition: 0.2s;
  color: #ffffff;
}

.actions_users {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #797979;
  width: 50px;
  height: 50px;
  border: transparent;
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(150, 145, 145, 0.53);
}

.action:hover {
  background-color: #8a8a8a;
  cursor: pointer;
  transition: 0.2s;
  color: #ffffff;
}

.action,
.number {
  font-family: "Nunito Regular", sans-serif;
  font-weight: 600;
}
</style>