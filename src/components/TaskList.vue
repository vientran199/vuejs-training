<template>
  <div class="container">
    <ul>
      <TaskRowVue :key="task.id" v-for="task in data" :taskDetail="task" @delete="handleDelete" @edit="handleEdit"/>
    </ul>
  </div>
</template>

<script>
import TaskRowVue from './TaskRow.vue';
export default {
  emits: ['edit','delete'],
  props:{
    data: []
  },
  name: 'TaskList',
  data () {
    return {
    }
  },
  methods: {
    handleDelete (task){
      this.$emit('delete',task)
    },
    handleEdit(task){
      this.$emit('edit',task)
    }
  },
  components: {
    TaskRowVue
  }
}
</script>

<style>
/* .container {
  border: 1px solid #000;
} */
</style>
