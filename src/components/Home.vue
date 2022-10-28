<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Ref</h2>
    <p ref="p">My name is {{name}} and my age is {{age}}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name"/>
    <h2>Reactive</h2>
    <p ref="p1">My name is {{newObject.name}} and my age is {{newObject.age}}</p>
    <button @click="handleClick1">Click me</button>
    <button @click="newObject.age++">add age</button>
    <input type="text" v-model="newObject.name"/>
  </div>    
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    name: 'Home',
    setup() {
        console.log('setup')
        const p = ref(null)
        // const p = ref('test')
        //p.value == null,  p.value = 'test'
        let name = ref('mario')
        let age = ref(30)
        // let name = 'mario'
        // let age = 30

        const handleClick = () =>{
            console.log(p, p.value)
            p.value.classList.add('test')
            //thay đổi name và age không dung ref sẽ không được
            //name = 'new name' k đổi được
            name.value = 'new name'
            age.value = 100
        }

        //Reactive
        //đối với object dùng reactive sẽ tố hơn ref, vì sẽ không cần .value
        //còn dùng reactive với các giá trị bình thường thì sẽ không đổi được giá trị
        const newObject = reactive({name:'test1',age:10})
        const handleClick1 = () =>{
          newObject.name = 'new name1'
          newObject.age = 100
        }
        return {name, age, handleClick, p,newObject,handleClick1}
    }
}
</script>

<style>

</style>