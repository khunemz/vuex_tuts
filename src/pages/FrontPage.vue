<template>

  <AddTodo />
  <br>
  <div v-if="allTodos" style="padding-top: 20px;">
    <div v-for="todo in allTodos" :key="todo.id">
      <TodosItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodosItem from '../components/TodosItem'
import AddTodo from '../components/AddTodo'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { TodosItem,AddTodo },
  name: 'FrontPage',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['fetchTodos'])
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>