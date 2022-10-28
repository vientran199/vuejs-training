<script>
export default {
    emits: ['edit','delete'],
    props: {
        taskDetail: {}
    },
    methods: {
        handleDelete(taskDetail){
            this.$emit('delete',taskDetail)
        },
        handleEdit(taskSelected){
            this.$emit('edit',taskSelected)
        }
    }
}
</script>

<template>
    <div>
        <li v-if="!!taskDetail.id" :key="taskDetail.id"><router-link :to="{name: 'detail',params:{id: taskDetail.id} }">{{taskDetail.text}}</router-link>
            <button v-on:click="() => handleEdit(taskDetail)">edit</button>
            <button v-on:click="() => handleDelete(taskDetail)">Delete</button>
        </li>
    </div>
</template>