<script setup lang="ts">
import Timer from "@/components/Timer.vue";
import {onMounted, ref} from "vue";
import {Game} from "@/stores/Game";

const game = Game.currentGame;

const formattedTask = game.formattedTask;
const formatted = ref(formattedTask.task.split(' ').map((task) => {
  if (task === '_') {
    return {item: '', isInput: true}
  }
  return {item: task, isInput: false}
}));

const currentIndex = ref(0);
const activeInput = ref(0);
const inputs = ref([]);

onMounted(() => {
  inputs.value[activeInput.value].focus();
})

function setCurrentIndex(index: number) {
  currentIndex.value = index;
}

function setTask(digit) {
  formatted.value[currentIndex.value].item += String(digit);
}

function nextInput() {
 if (activeInput.value > 0) {
    activeInput.value -= 2;
    console.log(activeInput.value)
 } else if (activeInput.value > formatted.value.length - 1) {
   activeInput.value += 2;
   console.log(activeInput.value)
 }

 inputs.value[activeInput.value].focus();
}

</script>

<template>
  <main>
    <div class="header">
     <RouterLink to="/"><button class="cancel" @click="game.timer.stopTimer"><img src="/icons/cancel.svg" alt="" >Отмена</button></RouterLink>
      <Timer/>
    </div>
    <div class="example">
      <p class="container_task" v-for="(task, index) of formatted" :key="index">
        <input :ref="el => inputs[index] = el" v-if="task.isInput" type="number" class="hidden" :value="task.item" @focus="setCurrentIndex(index)" @input="task.item = $event.target.value">
        <p v-else>
          {{task.item}}
        </p>
      </p>
    </div>
    <div class="result">
      <p class="correct_result">= {{ formattedTask.result }} ?</p>
    </div>
    <div class="actions">
      <div class="actions_number">
        <button class="number" v-for="num of 9" @click="setTask(num)">{{ num }}</button>
        <div></div>
        <button class="number" @click="setTask(num)">0</button>
      </div>
      <div class="actions_users">
        <button class="action"><img src="/icons/arrow_back.svg" @click="nextInput" alt=""></button>
        <button class="action"><img src="/icons/arrow_forward.svg" @click="nextInput" alt=""></button>
        <button class="action"> ?</button>
        <button class="action" @click="console.log(formatted.map(item => item.item).join(' '))"> =</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  height: 15px;
}

main {
  width: 400px;
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