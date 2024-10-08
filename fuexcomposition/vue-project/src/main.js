import './assets/main.css'

import { createApp,h,provide } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import store from "./store"

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://spacex-production.up.railway.app/',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render:() => h(App)
})

app.use(router).use(store)

app.mount('#app')
