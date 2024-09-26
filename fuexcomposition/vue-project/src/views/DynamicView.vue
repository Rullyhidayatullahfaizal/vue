<template>
    <Suspense >
        <template #default>
            <DynamicList></DynamicList>
        </template>
        <template #fallback>
            <span>loading...</span>
        </template>
    </Suspense>
</template>

<script>
import DynamicList from '@/components/nestedRoute/DynamicList.vue';

export default {
    components:{
        DynamicList
    },
     setup(){

        return {
            
        }
    }
}
</script>
