<template>
  <div class="about">
    <h1>{{ text }}</h1>
    <button @click="onChangeText"></button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const text = ref('Text by default.');

function onChangeText() {
  text.value = 'Changed!!!';
}
</script>

<style scoped>
button {
  font-size: 16px;
  padding: 10px;
}
</style>
