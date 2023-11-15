<script setup lang="ts">

import GameSettings from "@/components/GameSettings.vue";
import {provide, ref} from "vue";
import {Setting, SettingInterface, GameSetting} from "@/core/GameSettings";
import router from "@/router";
import {Game} from "@/core/Game";

const allDays = (localStorage.getItem('days')) ? JSON.parse(localStorage.getItem('days')) : {};
const lastDay = JSON.parse(localStorage.getItem('lastDay'));

// FIXME исправь ошибку ts
const settingState = ref<SettingInterface>((localStorage.getItem('settings'))
    // FIXME тут тип any
    ? JSON.parse(localStorage.getItem('settings'))
    // FIXME вынеси дефолтные значения в static поле initialState класса GameSettings
    : { duration: 1, complex: 1, summing: false, difference: false, multi: false, division: false, expo: false });

// FIXME daysCount
// FIXME Object.keys(allDays).length || 1
const days = ref<number>(1);
// FIXME JSON.parse(localStorage.getItem('percent')) || 0
const accuracy = ref<number>(0);

if (allDays) {
  days.value = Object.keys(allDays).length;
  accuracy.value = JSON.parse(localStorage.getItem('percent'));
}

provide('settingState', settingState.value);

function startGame() {
  const setting = new Setting(settingState.value);
  localStorage.setItem('settings', JSON.stringify(setting));
  Game.startGame(setting);

  Game.currentGame.getDayNow();
  Game.currentGame.getTask();

  router.push({path: '/game'});
}

</script>

<template>
  <div class="setting">
    <h1 class="greeting">Привет!</h1>
    <div class="result">
      <p>Добро пожаловать на {{ days }} тренировочный день,</p>
      <p>Ваш последний результат - решено {{ lastDay[0] }} из {{ lastDay[1] }}.</p>
      <p>Общая точность {{ accuracy }}%.</p>
    </div>
    <GameSettings />
    <button class="go" @click="startGame">Начать!</button>
  </div>
</template>

<style scoped>

.setting {
  margin-top: 30px;
  width: 400px;
}

.result {
  & p {
    margin: 0;
  }
}

.go {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 34px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #9f9f9f;
  box-shadow: 0 2px 2px 0 rgba(148, 148, 148, 0.53);
  margin-left: auto;
}

.go:hover {
  cursor: pointer;
}

@media (min-width: 1024px) {
  .setting {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .math_operation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>