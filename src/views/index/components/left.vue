<template lang="">
  <div>
    leftInfo
    {{ left }}
    {{ countNum }}
  </div>
  <el-button @click="addFun()">加一</el-button>
  <el-button @click="reduceFun()">减一</el-button>
</template>

<script>
import { useStore } from "@/pinia/store";
export default {
  emits: ['addFun', 'reduceFun'],
  // inject: [ 'rightFun'],
  data() {
    return {
      leftBoxContent: 0
    }
  },
  props: {
    left: {
      type: String,
      default: ''
    },
    countNum: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addFun() {
      // console.log(tihs.rightFun())
      this.$emit('addFun');
    },
    reduceFun() {
      this.$emit('reduceFun');
    },
    leftCountFun() {
      console.log('left count function')
    }
  },
  mounted() {
    this.$myhub.on('myhub1', (data) => {
      console.log('left:', data)
    });
    var piniaInfo = useStore()
    console.log( 12321321, piniaInfo )
  }
}
</script>

<style lang="">
    
</style>