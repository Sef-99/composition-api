<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="header">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'counter' }">Counter</RouterLink>
        <RouterLink :to="{ name: 'users' }">Users</RouterLink>
        <RouterLink :to="{ name: 'pokemon-search' }">Search Pokemon</RouterLink>
      </nav>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: large;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
