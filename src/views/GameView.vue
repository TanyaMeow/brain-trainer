<script setup lang="ts">

</script>

<template>
  <main>
    <div class="header">
      <button class="cancel"><img src="/icons/cancel.svg" alt="">Отмена</button>
      <div class="timer">
        <p class="title_timer">4:37</p>
      </div>
    </div>
    <div class="example">
      <p>13 * <input class="hidden" type="text"> * <input class="hidden" type="text"></p>
      <p class="correct_result">= 84240?</p>
    </div>
    <div class="actions">
      <div class="actions_number">
        <button class="number">1</button>
        <button class="number">2</button>
        <button class="number">3</button>
        <button class="number">4</button>
        <button class="number">5</button>
        <button class="number">6</button>
        <button class="number">7</button>
        <button class="number">8</button>
        <button class="number">9</button>
        <div></div>
        <button class="number">0</button>
      </div>
      <div class="actions_users">
        <button class="action"><img src="/icons/arrow_back.svg" alt=""></button>
        <button class="action"><img src="/icons/arrow_forward.svg" alt=""></button>
        <button class="action"> ?</button>
        <button class="action"> =</button>
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

.title_timer {
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

.example {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
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