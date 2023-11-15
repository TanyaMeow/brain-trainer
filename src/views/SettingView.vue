<script setup lang="ts">

import GameSettings from "@/components/GameSettings.vue";
import {provide, ref} from "vue";
import {Setting} from "@/core/GameSettings";
import type {SettingInterface} from "@/interface/SettingInterface";
import router from "@/router";
import {Game} from "@/core/Game";

const allDays = (localStorage.getItem('days')) ? JSON.parse(localStorage.getItem('days')  || '{}') : {};
const lastDay = JSON.parse(localStorage.getItem('lastDay')  || '[0, 0]');

// FIXME исправь ошибку ts (DONE)
const settingState = ref<SettingInterface>((localStorage.getItem('settings'))
    // FIXME тут тип any (DONE)
    ? JSON.parse(localStorage.getItem('settings') || String(Setting.initialState))
    // FIXME вынеси дефолтные значения в static поле initialState класса GameSettings (DONE)
    : Setting.initialState);

// FIXME daysCount (DONE)
// FIXME Object.keys(allDays).length || 1 (DONE)
const days = ref<number>(Object.keys(allDays).length || 1);
// FIXME JSON.parse(localStorage.getItem('percent')) || 0 (DONE)
const accuracy = ref<number>(JSON.parse(localStorage.getItem('percent') || '0') || 0);

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