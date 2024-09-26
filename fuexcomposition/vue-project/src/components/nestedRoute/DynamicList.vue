<template>
  <h1>Dynamic list</h1>
  <div v-if="result && result.launchesPast">
    <ul>
      <li v-for="(item, index) in result.launchesPast" :key="index">
        <RouterLink :to="`/dynamiroutes/${item.id}`">{{ item.mission_name }}</RouterLink>
    </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watchEffect } from 'vue'

export default {
   async setup() {
    // Define the GraphQL query
    const ALL_AUTHOR = gql`
      query {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
          }
        }
      }
    `
    const { result, loading, error } = useQuery(ALL_AUTHOR)

    watchEffect(() => {
      if (!loading.value && result.value) {
        console.log(result.value)
      }

      if (error.value) {
        console.error(error.value)
      }
    })

    return {
      result
    }
  }
}
</script>
