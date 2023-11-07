<script setup lang="ts">

import {SettingsStore} from "@/stores/settings";
import {ref} from "vue";

const timer = SettingsStore.getSettings().duration;
let sec = ref(0);
let min = ref(0);

const stopTime = new Date().getTime() + (timer * 60000);

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const remain = stopTime - now;
  min.value = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
  sec.value = Math.floor((remain % (1000 * 60)) / 1000);

  sec.value = sec.value < 10 ? "0" + sec.value : sec.value;

  if (remain < 0) {
    clearInterval(countdown);
  }
}, 1000);

</script>

<template>
  <div class="timer">
    <p class="title_timer">{{ min }}:{{sec}}</p>
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