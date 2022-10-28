<template>
    <div>
        <h1>Computed</h1>
        <input type="text" v-model="search" />
        <input type="text" v-model="search1" />
        <p>search temp - {{search}}</p>
        <div v-for="name in matchSearch" :key="name">{{name}}</div>
        <button @click="handleclick">Stop watch</button>
    </div>
</template>

<script>
import { computed, ref,watchEffect,watch } from 'vue';

export default {
    name:'computed',
    setup(){
        const names = ref(['asdf','werwer','asd','zxcvz','asdcv'])
        const search = ref('')
        const search1 = ref('')
        const stopwatch = watch(search, ()=>{
            //chạy khi biến đang watch thay đổi
            console.log('watch search')
        })
        const stopeffect = watchEffect(()=>{
            //chạy khi những biến bên trong cb thay đổi
            console.log('watch effect', search1.value)
        })
        const matchSearch = computed(()=>{
            return names.value.filter(name => name.includes(search.value))
        })
        const handleclick = () =>{
            stopwatch()
            stopeffect()
        }
        return {search,search1,names,matchSearch,handleclick}
    }
}
</script>

<style>

</style>