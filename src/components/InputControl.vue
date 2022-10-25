<template>
    <div>
      <label>Name</label>
      <input v-model.trim="taskString" id="name"/>
      <button v-if="taskSelected" v-on:click="handleEdit()">Save</button>
      <button v-else v-on:click="handleAdd()">Add</button>
    </div>
</template>
<script>
export default {
  // emits: [''],
  props: {
    taskSelected: Object
  },
  data () {
    return {
      taskString: ''
    }
  },
  methods: {
    handleAdd(){
      this.$emit('send-data',this.taskString)
      this.$emit('reset',()=>{this.taskString = ''})
    },
    handleEdit(){
      this.$emit('edit',{id: this.$props.taskSelected.id,text: this.taskString})
      this.$emit('reset',()=>{this.taskString = ''})
    }
  },
  watch: {
    taskSelected(newTaskSelected){
      if(!newTaskSelected) return
      this.taskString = newTaskSelected.text
    }
  }
}
</script>
