<template>
    <input type="text" placeholder="child component" v-model="name_">
    <input type="number" name="" id="" placeholder="age-child component" v-model="age_">
</template>

<script>
import { computed, toRefs } from 'vue';

    
    export default {
        props:{
            name:{
               type: String,
                default:"mulyono"
            },
            age:{
                type: Number,
                default:0
            }

        },
        emits:['update:name','update:age'],
        setup(props,{emit}){
            const {name,age} = toRefs(props)

            const name_ = computed({
                get : () => name.value,
                set : (v) => emit('update:name',v)
            })

            const age_ = computed({
                get : () => age.value,
                set : (v) => emit('update:age',parseInt(v))
            })

            return {
                name_,age_
            }
        }
    }
</script>