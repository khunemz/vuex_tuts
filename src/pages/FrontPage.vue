<template>
  <div>{{displayCoachedList}}</div>
</template>

<script>
export default {
  
  name: 'FrontPage',
  data() {
    return {}
  },
  computed: {
    displayCoachedList() {
      return this.$store.getters['displayCoaches'];
    }
  }
}
</script>

<style>

</style>