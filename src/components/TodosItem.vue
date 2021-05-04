<template>
  <div class="card" @dblclick="onDblClickTodo(todo)" :class="todo.completed ? 'success' : 'danger'">
    <div class="card-body">
      <div>
        {{ todo.title}}
      </div>
      <div class="pull-right justify-content-end">
        <a href="#" class="card-link small" @click="deleteTodo(todo.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodosItem',
  props: {
    todo: Object
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    onDblClickTodo(todo) {
      const updTodo = {
        id: todo.id, 
        title: todo.title,
        completed: !todo.completed,
      }

      this.updateTodo(updTodo)
    }
  }
}
</script>

<style scoped>
  .success {
    border-left: green 5px solid;
  }
</style>