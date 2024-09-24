<template>
    <h1>belajar watch effect dan watch</h1>
    <p>{{ name }} dengan umur {{ age }}</p>
    <button @click="add">add</button>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue';

export default {
    setup() {
        const data = reactive({
            name: 'John Doe',
            age: 30
        })

        const dataref = ref(1)
        const dataref2 = ref(2)

        const add = () => {
            // data.age++
            dataref.value++
            dataref2.value++
        }

        watch([dataref, dataref2], (newVal, oldVal) => {
            console.log(dataref.value, dataref2.value)
            console.log(newVal, oldVal) })


        watch(() => data.age, (newVal, oldVal) => {
            console.log(`data age :${data.age}`)
            console.log(newVal, oldVal)
        })

        // watchEffect(() => {
        //     console.log(data.age)
        // },{
        //     onTrigger(e){
        //         console.log(e)
        //     }
        // })


        return{
        ...toRefs(data),add
        }
    }
}
</script>