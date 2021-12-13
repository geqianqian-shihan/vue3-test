<template>
    <div>search Info</div>
    <div> {{ count }} </div>
</template>

<script>
export default {
  data(){
    return {
          }
  },
  computed: {
    count(){
      return this.$store.state.username
    }
  },
  mounted() {
    
  }
}
</script>

<style>

</style>