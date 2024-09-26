<template>
    <div>
      <h1>Detail Launch</h1>
      <div v-if="launch">
        <p>Mission Name: {{ launch.mission_name }}</p>
        <p>Rocket: {{ launch.rocket.rocket_name }}</p>
        <p>Launch date lokal: {{ launch.launch_date_local }}</p>
        <p>launch site :{{ launch.launch_site }}</p>
      </div>
      <p v-else-if="loading">Loading...</p>
      <p v-else>Error fetching data.</p>
    </div>
  </template>
  
  <script>
  import { useQuery } from '@vue/apollo-composable'
  import gql from 'graphql-tag'
  import { computed, ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default {
     setup() {
        
      // Get the route object
      const route = useRoute()
  
      // Get the id from route params
      const id = ref(route.params.id)
  
      // Define the GraphQL query with a variable for ID
      const GET_LAUNCH_BY_ID = gql`
        query GetLaunchById($id: ID!) {
          launch(id: $id) {
            mission_name
            launch_date_local
            rocket {
              rocket_name
            }
            launch_site {
              site_name_long
            }
          }
        }
      `
  
      // Use the query and pass the id as a variable
      const { result, loading, error } = useQuery(GET_LAUNCH_BY_ID, { id })

    
  
      // Watch the result and output it for debugging
      watchEffect(() => {
        if (!loading.value && result.value) {
          console.log(result.value)
        }   
        if (error.value) {
          console.error(error.value)
        }
      })
  
      const launch = computed(() => result.value?.launch)
      // Return the necessary data to the template
      return {
        launch,
        loading,
        error
      }
    }
  }
  </script>
  