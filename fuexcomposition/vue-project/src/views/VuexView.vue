<template>
    <h1>state manangement vuex</h1>
    <p>username: {{ username }}</p>
    <div>
        <button @click="addLike">like</button>
    <span>total likes :{{ likes }}</span>
    </div>
    <br>
    <div>
        <button @click="addDislike">dislike</button>
        <span>Total Disleks : {{ dislakes }}</span>
    </div>

    <div>
        <h4>ini adalah data dari mas elont musk </h4>
        <div v-for="(item, index) in masElon" :key="index">
            <ul>
                <li>{{ item.mission_name }}</li>
                <li>{{ item.rocket.rocket_name }}</li>
                <li>Links {{item.links.article_link }}</li>
            </ul>
        </div>
    </div>

</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        const store = useStore();
        const username = ref("");

        const addLike = () => {
            store.commit('incrementLikes');
        }

        const addDislike = () => {
            store.commit('incrementDislikes');
        }

        watchEffect(() => {
            username.value = store.state.username
        })

        const likes = computed(() => store.state.totalLikes);

        const dislakes = computed(() => store.state.totalDislikes);

        const masElon = computed(() => store.state.credentials);
        
        watchEffect(() => {
            console.log(masElon.value)
        })


        return {
            addLike,likes,dislakes,addDislike,username,masElon
        }
    }
}
</script>