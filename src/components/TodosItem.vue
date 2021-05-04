<template>
  <div class="card">
    <div class="card-body">
      {{ todo.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosItem',
  props: {
    todo: Object
  },
data() {
    return {

    }
  },
}
</script>

<style scoped>
  
</style>