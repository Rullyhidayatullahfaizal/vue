<template>
    <div>
        <h1>Halaman  login</h1>
        <div>
            <input type="text" name="" placeholder="username" v-model="username">
            <button @click="login">login</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


    export default {
        setup(){
            const username = ref("")
            const router = useRouter()
            const store = useStore()

            const login = () => {
                store.commit("setUsername", username.value)
                store.dispatch("getCredential")
                router.push("/vuex")
            }

            return {
            username,
            login
        }
        }

    }
</script>