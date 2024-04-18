<template lang="">
  <div>
    <h1>Counter</h1>
    <h2>{{ count }}</h2>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>
<script setup>
import useCounter from '@/composables/useCounter.js';

const { count, increase, decrease } = useCounter();
</script>
<style scoped></style>
