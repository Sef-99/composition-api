<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Back</button>
  <button @click="nextPage">Next</button>
  <span> Page: {{ currentPage }}</span>
</template>

<script setup>
import useUsers from '@/composables/useUser.js';

const { currentPage, errorMessage, isLoading, nextPage, prevPage, users } =
  useUsers();
</script>
