<script setup lang="ts">
import GameSettings from "@/components/GameSettings.vue";
import {provide, ref} from "vue";
import {Setting, SettingInterface, SettingsStore} from "@/stores/Settings";
import router from "@/router";

const settingState = ref<SettingInterface>({
  duration: 0,
  complex: 0,
  summing: false,
  difference: false,
  multi: false,
  division: false,
  expo: false
});

provide('settingState', settingState.value);

function go() {
  SettingsStore.setSettings(new Setting(settingState.value));
  router.push({path: '/game'});
}

</script>

<template>
  <div class="setting">
    <h1 class="greeting">Привет!</h1>
    <div class="result">
      <p>Добро пожаловать на 24 тренировочный день,</p>
      <p>Ваш последний результат - решено 10 из 25.</p>
      <p>Общая точность 80%.</p>
    </div>
    <GameSettings />
    <button class="go" @click="go">Начать!</button>
  </div>
</template>

<style scoped>

.setting {
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
