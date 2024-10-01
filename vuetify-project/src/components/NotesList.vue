<template>
  <v-card class="rounded ms-5 h-100 w-100">
    <v-switch v-model="switchMe" class="d-flex justify-center mt-1">
    <template v-slot:label>
      Turn on the progress:
      <v-progress-circular
        :indeterminate="switchMe"
        class="ms-2"
        size="24"
      ></v-progress-circular>
    </template>
  </v-switch>
    <v-textarea class="h-50 py-4 px-5"
      clear-icon="mdi-close-circle"
      label="Text"
      model-value="This is clearable text."
      clearable
      auto-grow
    ></v-textarea>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';


    const switchMe = ref(false);

</script>
