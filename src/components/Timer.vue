<script setup lang="ts">

import {SettingsStore} from "@/stores/settings";
import {ref} from "vue";

const timer = SettingsStore.setting;
// let sec;
// let min;
//
// const start_time = ref(new Date());
// const stop_time = start_time.value.setMinutes(start_time.value.getMinutes() + timer.duration);
//
// const countdown = setInterval(function () {
//   const now = new Date().getTime();
//   const remain = stop_time - now;
//   min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
//   sec = Math.floor((remain % (1000 * 60)) / 1000);
//   sec = sec < 10 ? "0" + sec : sec;
//   if (remain < 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

</script>

<template>
  <div class="timer">
    <p class="title_timer">{{ timer.duration}}</p>
  </div>
</template>

<style scoped>
.title_timer {
  font-weight: 600;
  margin: 0;
}

.timer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60px;
  height: 30px;
  border: 2px solid #5395e7;
  border-right: 20px solid #5395e7;
  background-color: #f5f5f5;
  padding-right: 10px;
}
</style>