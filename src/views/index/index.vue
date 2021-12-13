<template>
    <div>index Info</div>
    <div> {{ countNum }} </div>
    <el-row>
      <el-col :span="12">
        <leftInfo ref="leftInfo" :left="left" :count-num="countNum" @addFun="addFun" @reduceFun="reduceFun"></leftInfo>
      </el-col>
      <el-col :span="12">
        <rightInfo ref="rightInfo" :right="right"></rightInfo>
      </el-col>
    </el-row>
</template>

<script>
import leftInfo from './components/left.vue';
import rightInfo from './components/right.vue';
// import eventBus from '@/eventBus/eventBus';
// !!setup中没有this，需要通过getCurrentInstance来获取Vue实例
// Vue3.x 源码移除了 $on/$off/$once方法, 使用 mitt 方便不占地儿
export default {
  components: { leftInfo, rightInfo },
  data(){
    return {
      left: 'leftInfo123',
      right: 'rightInfo123',
      countNum: 0,
      todos: ['todo1', 'todo2', 'todo3']
    }
  },
  provide() {
    return{
      todos: this.todos,
      indexAddCount: this.addFun,
      // rightFun: rightFun
    }
  },
  methods: {
    addFun() {
      // this.$refs.leftInfo.rightFun()
      // 父组件调用子组件
      this.$refs.rightInfo.rightFun()
      this.countNum++
    },
    reduceFun() {
      this.countNum--
    }
  },
  mounted() {
    console.log('index', '-------')
    // 事件名称到已注册处理函数的映射
    console.log(this.$myhub.all)
    this.$myhub.emit('myhub', 'index 略略略.....')
  }
}
</script>

<style>

</style>