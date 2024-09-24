<style>
  .reactif {
    display: flex;
  }
  .data-reactif {
    margin-top: 25px;
    margin-left: 10px;
  }
</style>
<template>
    <div class="composition">
      <h1>Belajar composition View</h1>
      <p>{{ messegae }}</p>

      <div class="reactif">
        <h2 >reactif :</h2>
        <p class="data-reactif">{{ data.name }} dengan umur {{ data.age }} ini menggunakan toref {{ name }} dengan umur {{ age }}</p>
      </div>
      <div>
        nilai counter:  {{ age }}
        <button @click="pluss">+add</button>
      </div>
      <div>
        result: {{ result }}
      </div>
      <h3>getter dan setter</h3>
      <p> data awal :{{ nilai }}</p>
      <button @click="addGet">x++</button>
      <p>perubahan dengan setter dan getter :{{ resultGetSet }}</p>
    </div>
</template>
  
<script>
    import { computed, reactive, ref, toRefs, } from 'vue';

    export default {
      setup() {
        const messegae = ref('Hello World')
        const data = reactive({
          name: 'John Doe',
          age: 30
        })
        const dataSetGet = reactive({
          nilai : 0
        })
        const addNum = ref(1)

        // setter dan getter
        const addGet = () => {
          addNum.value= 5
          dataSetGet.nilai ++
        }
        
        const resultGetSet = computed({
          get : () => dataSetGet.nilai+ addNum.value,
          set : (v) => (addGet.value = v)
        })

        const pluss = () => {
          data.age++
        }

        setTimeout(() => {
          messegae.value = 'Hello Vue!'
        }, 3000)

        setTimeout(() => {
          data.name = 'Jane khai'
          data.age = 25
        },2000)

        // computed
        const result = computed(() =>  data.age + addNum.value)
        return {
          messegae,data,...toRefs(data),pluss,result,resultGetSet,...toRefs(dataSetGet),addGet
        }
      }
    }
</script>