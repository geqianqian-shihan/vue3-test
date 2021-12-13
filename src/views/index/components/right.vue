<template lang="">
  <div>
    rightInfo
    {{ right }}
    <!-- {{ parent.name }} -->
  </div>
  <el-button @click="rightCountFun">rightCountFun</el-button>
  <!-- <el-button>减一</el-button> -->
</template>

<script>
export default {
  inject: [ 'todos', 'indexAddCount' ],
  props: {
    right: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      rightBoxCount: 0
    }
  },
  computed: {
    cont(){
      return this.todoLength()
    }
  },
  methods: {
    rightCountFun() {
      console.log('right count function');
      console.log(this.todos);
      this.indexAddCount()
    },
    rightFun() {
      console.log('right function');
    }
  },
  mounted() {
    this.$myhub.on('myhub', (data) => {
      console.log('right:', data)
    })
    this.$myhub.emit('myhub1', 'right 略略略.....')
  //   // 添加 eventBus 监视器
  //   eventBus.$on('custom-event', () => {
  //     console.log('right eventBus')
  //   })
  },
  // beforeDestroy() {
  //   // 移除 eventBus 监视器
  //   eventBus.$off('custom-event');
  // }
}
</script>

<style lang="">
    
</style>