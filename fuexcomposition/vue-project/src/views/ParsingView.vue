<template>
    
    <h1>belajar parsing props emit</h1>
    <textSatu :data="data" :user="user" @submit="submitEmit" class="text-container">
        asdasd

        <template #footer>
      <p>Ini adalah footer dari parent yang menggunakan named slot.</p>
    </template>
    </textSatu>
    <button @click="changeName">change name</button>
</template>

<script>
import textSatu from '@/components/textSatu.vue';
import { reactive, ref } from 'vue';

export default {
    components:{
        textSatu,
    },
    setup() {

        const data = reactive({
            name : 'luffy',
            age : 17
        })
        const user = ref('zoro') 

        const changeName = () => {
            data.name = "sanji"
            user.value = "sanji"

        }

        const submitEmit = (e) => {
            console.log(e)
        }

        return{
        data,user,changeName,submitEmit
    }
    }
   
}
</script>