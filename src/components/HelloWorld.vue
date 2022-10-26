<template>
  <div class="hello">
    <h1>To do list</h1>
    <InputControl @send-data="handleAdd" @reset="(a) => {a()}" :taskSelected="taskSelected" @edit="onEdit"/>
    <TaskListVue :data="taskList" @delete="handleDelete" @edit="handleEdit" :taskSelected="taskSelected"/>
  </div>
</template>

<script>
import TaskListVue from './TaskList.vue'
import InputControl from './InputControl.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      taskList: [],
      taskSelected: null
    }
  },
  components: {TaskListVue, InputControl},
  methods: {
    handleAdd(taskString){
      if(!taskString) return
      const id = Math.floor(Math.random()*10000)
      const newTask = {id: id,text: taskString}
      this.taskList.push(newTask)
      localStorage.setItem('task-list',JSON.stringify(this.taskList))
    },
    handleDelete(taskSelected){
      this.taskList = this.taskList.filter(task => task.id !== taskSelected.id)
      localStorage.setItem('task-list',JSON.stringify(this.taskList))
    },
    handleEdit(taskSelected){
      this.taskSelected = taskSelected
    },
    onEdit(newTask){
      const index = this.taskList.findIndex(task => task.id === newTask.id)
      this.taskList.splice(index,1,newTask)
      this.taskSelected = null
      localStorage.setItem('task-list',JSON.stringify(this.taskList))
    }
  },
  mounted(){
    const taskList = localStorage.getItem('task-list')
    if(taskList) this.taskList = JSON.parse(taskList)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
