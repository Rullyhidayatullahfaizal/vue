import { createStore } from "vuex";
import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client/core';

// Apollo Client setup
const httpLink = createHttpLink({
  uri: 'https://spacex-production.up.railway.app/', // URL dari GraphQL API
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


export default createStore({
    state(){
        return {
            totalLikes:0,
            totalDislikes:0,
            username:"",
            credentials:[]
        }
    },
    mutations:{
        incrementLikes(state){
            state.totalLikes++
        },
        incrementDislikes(state){
            state.totalDislikes++
        },
        setUsername(state,value){
            state.username = value
        },
        setCredential(x,payload){
            x.credentials = payload
        }
    },
    actions:{
        async getCredential({commit}){
            try {
                const query = gql`
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
        `;

        // Eksekusi query menggunakan Apollo Client
        const response = await apolloClient.query({
          query
        });

        // Commit hasil data ke mutation
        commit('setCredential', response.data.launchesPast);
            } catch (error) {
                console.log("eror launching ",error)
            }
        }
    }
})