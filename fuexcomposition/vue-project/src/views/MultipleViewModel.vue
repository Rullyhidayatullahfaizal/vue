<template>
    <h1>belajar multiple view model</h1>
    <div>
        <pre>{{name}}</pre>
        <pre>{{ age }}</pre>
    </div>
    <div>
        <h3>child kompoent interactive</h3>
        <ViewModel v-model:name="name" v-model:age="age"/>
    </div>
</template>

<script>
import { ref } from 'vue';

    import ViewModel from '@/components/ViewModel.vue'
    export default {

        components: {
            ViewModel
        },
        setup() {
            const name = ref('joko')
            const age = ref(0)

            return {
                name,age
            }
        }
    }
</script>