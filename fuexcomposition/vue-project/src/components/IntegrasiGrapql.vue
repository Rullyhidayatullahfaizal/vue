<template>
    <p>hello grap ql</p>
    <div v-if="data">
      <p>CEO: {{ data.company.ceo }}</p>
      <p>Apoapsis AU: {{ data.roadster.apoapsis_au }}</p>
    </div>
  </template>
  
  <script setup>
  import { useQuery } from '@vue/apollo-composable';
  import gql from "graphql-tag";
  import { ref, watchEffect } from 'vue';
  
  // Define the GraphQL query
  const ALL_AUTHOR = gql`
    query {
      company {
        ceo
      }
      roadster {
        apoapsis_au
      }
    }
  `;
  
  const { result } = useQuery(ALL_AUTHOR);
  
  const data = ref(null);
  
  // Simulasi delay dengan setTimeout
  watchEffect(() => {
    if (result.value) {
      setTimeout(() => {
        data.value = result.value;
      }, 2000); 
    }
  });
  </script>
  