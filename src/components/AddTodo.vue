<template>
  <h4>Add todo</h4>
  <div class="">
    <form>
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
export default {
  name: 'AddTodo',
  
}
</script>

<style>

</style>