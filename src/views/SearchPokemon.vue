<template>
  <h1>Search Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Pokemon ID"
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>
  <br />
  <span>Press enter to search</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const pokemonId = ref(1);
    const txtSearchId = ref();

    onActivated(() => {
      txtSearchId.value.select();
    });

    return {
      pokemonId,
      txtSearchId,

      onSubmit: () => {
        router.push({ name: 'pokemon-id', params: { id: pokemonId.value } });
      },
    };
  },
};
</script>
