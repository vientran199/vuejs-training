<template>
    <div>
        <h3>{{ post.title }}</h3>
        <h3>{{ snipet }}</h3>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        console.log(props.post)
        const snipet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })
        return { snipet }
    }
}
</script>

<style>

</style>