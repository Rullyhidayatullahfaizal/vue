<template>
    <h1>belajar watch effect dan watch</h1>
    <p>{{ name }} dengan umur {{ age }}</p>
    <button @click="add">add</button>

    <div>
        <h3>ini adalah data Mas elon </h3>
        <div v-for="(item, index) in dataMasElon" :key="index">
            <ul>
                <li>
                    {{ item.mission_name }}
                </li>
            </ul>
        </div>
            

    </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch, } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const data = reactive({
            name: 'John Doe',
            age: 30
        })

        // ambil data mas elon
        const store = useStore()
        onMounted(() => {
            store.dispatch('getCredential')
        })

        const dataMasElon = computed(() =>store.state.credentials)


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
        ...toRefs(data),add,dataMasElon
        }
    }
}
</script>