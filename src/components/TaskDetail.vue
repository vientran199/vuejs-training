<template>
  <div v-if="task">
    <p>{{task.id}}</p>
    <p>{{task.text}}</p>
  </div>
</template>

<script>
export default {
    //data
    //methods
    //computed
    //lifecycle hooks
    props: ['id'],
    data() {
        return {
            task: null
        }
    },
    mounted() {
        //fake fetch data
        const taskList = localStorage.getItem('task-list')
        const task = (JSON.parse(taskList)).filter(task => task.id === this.id)[0]
        this.task = task
    }
}
</script>

<style>

</style>