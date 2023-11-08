<script setup lang="ts">
import {inject} from "vue";

let setting = inject('settingState');

</script>

<template>
  <div class="setting_game">
    <h1 class="setting_title">Настройки</h1>
    <div class="setting_duration">
      <input type="range" min="1" max="15" v-model="setting.duration">
      <p class="duration">Длительность {{ setting.duration }}</p>
    </div>
    <div class="setting_complexity">
      <input type="range" min="1" max="10" v-model="setting.complex">
      <p class="complexity">Сложность {{ setting.complex }}</p>
    </div>
    <div class="math_operation">
      <div><input type="checkbox"
                  v-model="setting.summing">Суммирование</div>
      <div><input type="checkbox"
                  v-model="setting.difference">Разность</div>
      <div><input type="checkbox"
                  v-model="setting.multi">Умножение</div>
      <div><input type="checkbox"
                  v-model="setting.division">Деление</div>
      <div><input type="checkbox"
                  v-model="setting.expo">Возведение в степень</div>
    </div>
  </div>
</template>

<style scoped>

input {
  margin-right: 15px;
}

.complexity,
.duration {
  margin-top: 0;
}

.setting_title {
  font-size: 22px;
}

</style>