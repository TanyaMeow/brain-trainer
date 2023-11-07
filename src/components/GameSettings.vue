<script setup lang="ts">
import {inject, ref} from "vue";

const dur = ref(0);
const com = ref(0);
const sum = ref(false);
const dif = ref(false);
const mul = ref(false);
const div = ref(false);
const expo = ref(false);

let setting = inject('set');

</script>

<template>
  <div class="setting_game">
    <h1 class="setting_title" @click="console.log(setting)">Настройки</h1>
    <div class="setting_duration">
      <input type="range" min="1" max="15" v-model="dur" @change="setting.duration = dur">
      <p class="duration">Длительность {{ dur }}</p>
    </div>
    <div class="setting_complexity">
      <input type="range" min="1" max="10" v-model="com" @change="setting.complex = com">
      <p class="complexity">Сложность {{ com }}</p>
    </div>
    <div class="math_operation">
      <div><input type="checkbox"
                  v-model="sum"
                  @change="setting.summing = sum">Суммирование</div>
      <div><input type="checkbox"
                  v-model="dif"
                  @change="setting.difference = dif">Разность</div>
      <div><input type="checkbox"
                  v-model="mul"
                  @change="setting.multi = mul">Умножение</div>
      <div><input type="checkbox"
                  v-model="div"
                  @change="setting.division = div">Деление</div>
      <div><input type="checkbox"
                  v-model="expo"
                  @change="setting.expo = expo">Возведение в степень</div>
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