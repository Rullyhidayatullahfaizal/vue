<script setup>
import { computed } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useStore } from 'vuex';

const store = useStore();

const likes = computed(() => store.state.totalLikes);
const dislakes = computed(() => store.state.totalDislikes);


</script>

<template>
  <main>
    <TheWelcome />
    <div>
      total likes : {{ likes }}
      <p>total disleks : {{ dislakes }}</p>
    </div>
  </main>
</template>
