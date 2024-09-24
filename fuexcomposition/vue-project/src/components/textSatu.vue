<template>
    <div>
        <p>{{ data.name  }} : {{ user }}</p>
  <p>{{ manipulation }}</p>
  <p>destracturing: {{ destracturing }}</p>
  <button @click="submit">from emit</button>
  
   <!-- Menggunakan slot -->
   <slot> <!-- Default slot untuk konten dari parent -->
      <p>Ini adalah konten default jika tidak ada konten yang disediakan dari parent.</p>
    </slot>
    
    <!-- Named slot -->
    <slot name="footer">
      <p>Ini adalah slot footer default.</p>
    </slot>
    </div>
 
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})  ,
    },
    user: {
      type: String,
      default: ''
    }
  },
  emits:['submit'],
  setup(props,{emit}) {

    const { data, user } = toRefs(props)

    const destracturing = computed(() => {
      return data.value.name + ' ' + user.value
    })

    const manipulation = computed(() => {
      return props.data.name + ' ' + props.user
    })

   
    const submit = () => {
      emit('submit','ini adalah data dari child component yang digunakana untuk parent')
    }

    return {
      manipulation,destracturing,submit
    }
  }
}
</script>
