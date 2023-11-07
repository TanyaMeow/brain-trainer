<script setup lang="ts">

import {ref} from "vue";

const dur = ref(0);
const com = ref(0);

</script>

<template>
  <div class="setting">
    <h1 class="greeting">Привет!</h1>
    <div class="result">
      <p>Добро пожаловать на 24 тренировочный день,</p>
      <p>Ваш последний результат - решено 10 из 25.</p>
      <p>Общая точность 80%.</p>
    </div>
    <div class="setting_game">
      <h1 class="setting_title">Настройки</h1>
      <div class="setting_duration">
        <input type="range" min="1" max="15" v-model="dur">
        <p class="duration">Длительность {{ dur }}</p>
      </div>
      <div class="setting_complexity">
        <input type="range" min="1" max="10" v-model="com">
        <p class="complexity">Сложность {{ com }}</p>
      </div>
      <div class="math_operation">
        <div><input type="checkbox">Суммирование</div>
        <div><input type="checkbox">Разность</div>
        <div><input type="checkbox">Умножение</div>
        <div><input type="checkbox">Деление</div>
        <div><input type="checkbox">Возведение в степень</div>
      </div>
    </div>
    <button class="go">Начать!</button>
  </div>
</template>

<style scoped>

input {
  margin-right: 15px;
}

.setting {
  width: 400px;
}

.setting_title {
  font-size: 22px;
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

.complexity,
.duration {
  margin-top: 0;
}

@media (min-width: 1024px) {
  .setting {
    min-height: 100vh;
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
