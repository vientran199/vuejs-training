<template>
  <div>
    <h1>Home #11</h1>
    <div v-for="post in posts" :key="post.id">
        <PostList :post="post" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import {ref,onMounted,onUnmounted ,onUpdate} from 'vue'
export default {
    name: 'home11',
    components: {PostList},
    setup() {
        const posts = ref([
            {id: 1, title: 'title1', body: 'Property or method "posts" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties'},
            {id: 2, title: 'title2',body:'Property or method "posts" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties'},
            {id: 3, title: 'title3',body:'Property or method "posts" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties'},
        ])
        onMounted(() => console.log('mouted'))
        onUnmounted(() => console.log('onUnMounted'))
        onUpdate(() => console.log('onUpdate'))
        return {posts}
    }
}
</script>

<style>

</style>