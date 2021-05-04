<template>
  <h4>Add todo</h4>
  <div class="">
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" v-model="title" placeholder="add todo .." />
      </div>
      <div class="form-group">
        <input class="btn btn-block btn-success" type="button" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onsubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    } 
  }
}
</script>

<style>

</style>