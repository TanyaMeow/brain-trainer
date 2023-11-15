<script setup lang="ts">

import {computed, inject, ref} from "vue";
import {Game} from "@/core/Game";

const openSolution = inject<boolean>('openSolution');
let correctResult = inject<string>('correctResult');

</script>

<template>
  <div class="block_popup" v-show="openSolution">
    <div class="container_popup">
      <div class="popup">
        <div>
          <p>Решение: </p>
          <p>{{ correctResult }}</p>
        </div>
      </div>
      <img @click="openSolution = false" src="/icons/cancel.svg" alt="">
    </div>
  </div>
</template>

<style scoped>

.block_popup {
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 524px;
}

.container_popup {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f0f5ff;
  border: 2px solid #5373b6;
  border-radius: 5px;

  width: 300px;
  height: 200px;
}

img {
  position: absolute;
  top: 173px;
  right: 63px;
}

</style>