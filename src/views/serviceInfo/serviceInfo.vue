<template>
    <div>service Info</div>
    <div> {{ count }} </div>

    <todo>
      插槽：add to do {{ service }}
    </todo>
</template>

<script>
import todo from './components/todo.vue';
export default {
  components: { todo },
  data(){
    return {
      service: 'service'
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