<template>
    <h1>belajar apollo integration graphql</h1>
    <suspanse>
        <template #default>
            <apollosGrapql/>
        </template>
        <template #fallback>
            <h3>loading...</h3>
        </template>

    </suspanse>
</template>
<script>
import { defineAsyncComponent } from 'vue';

// Import komponen secara async
const apollosGrapql = defineAsyncComponent(() => import('@/components/IntegrasiGrapql.vue'));


export default {
    components: {
        apollosGrapql
    }
 
}
</script>