<template>
    <div>
        testInfo
    </div>
    <el-row>
        <el-col :span="12">
            <leftInfo></leftInfo>
        </el-col>
        <el-col :span="12">
            <rightInfo></rightInfo>
        </el-col>

        <!-- transition、 keep-alive、 router-view-->
        <!-- <transition-group name="fade">
            <p v-if="fadeBox">transition 11111111111111111111111</p>
        </transition-group>
        <transition-group name="fade">
            <p v-if="!fadeBox">transition 11111111111111111111111</p>
        </transition-group>
        <el-col :span="24">
            <el-button @click="fadeChange()">切换</el-button>
        </el-col> -->

        <el-col :span="24">
          <el-button @click="prev()">prev</el-button>
          <el-button @click="next()">next</el-button>
          <el-button @click="autoPlay()">auto paly</el-button>
          <el-button @click="clearTimer()">stop</el-button>
        </el-col>

        <transition-group tag="ul" name="banner-trans" class="banner-container">
          <el-li class="image-container"
          v-for="(item, index) in banners"
          v-show="index === imgIndex"
          :key="index">
            <a><img :src="item.src" /></a>
          </el-li>
        </transition-group>
        <el-col :span="24">
          <div class="banner-points">
            <a class="banner-point" @click="jump(index)" :class="{'active': index === imgIndex}" v-for="(item, index) in banners.length" :key="index"></a>
          </div>
        </el-col>
        
    </el-row>
</template>

<script>
import leftInfo from './components/left.vue';
import rightInfo from './components/right.vue';
export default {
    name: 'WebGqqTestinfo',
    components: { leftInfo, rightInfo },
    data() {
        return {
            fadeBox: true,
            banners: [
              {src: './src/assets/images/banner/1.png'},
              {src: './src/assets/images/banner/2.png'},
              {src: './src/assets/images/banner/3.png'},
              {src: './src/assets/images/banner/4.png'}
            ],
            imgIndex: 0,
            timer: null,
            delayTimer: null,
            timerFlag: false
        };
    },

    mounted() {
        this.autoPlay()
    },

    methods: {
        fadeChange() {
            this.fadeBox = !this.fadeBox;
        },
        prev() {
          this.delay()
          const lastIdx = this.banners.length - 1;
          this.imgIndex = 0 === this.imgIndex ? lastIdx : this.imgIndex - 1
        },
        next() {
          this.delay()
          const lastIdx = this.banners.length - 1;
          if(this.imgIndex < lastIdx){
            this.imgIndex += 1;
          }else{
            this.imgIndex = 0;
          }
        },
        jump(index) {
          this.imgIndex = index
        },
        autoPlay() {
          clearInterval(this.timer);
          const that = this;
          this.timer = setInterval(function(){
            console.log('shdfjdkfh');
            if(!that.timerFlag){
              that.next()
            }
          }, 5000)
        },
        clearTimer() {
          clearInterval(this.timer)
        },
        // 防止手动切换和自动切换同时进行出现的混乱
        delay() {
          this.timerFlag = true;
          clearInterval(this.delayTimer);
          this.delayTimer = setInterval(() => {
            this.timerFlag = false
          }, 1000)
        }
    },
    // 路由相关
    // beforeRouteEnter(to, from, next){
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
    //     console.log('test.....', to)
    //     next();
    // 可以通过传一个回调给 next来访问组件实例，在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
        // next(vm => {
        //     // 通过 `vm` 访问组件实例
        // })
    // },
    // beforeRouteUpdate(to, from, next){
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        // 支持给 next 传递回调的唯一守卫
    // },
    // beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        // ** 用来禁止用户在还未保存修改前突然离开
    // }
};
</script>

<style lang="css" scoped>
  /* .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to{
      transform: translateX(10px);
      opacity: 0;
  } */
  .banner-points {
    display: inline-block;
    text-align: right;
    transform: translateZ(0);
    z-index: 10;
  }

  .banner-points .banner-point {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-color: hsla(0, 0%, 100%, .3);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(0, 0, 0, .4);
    opacity: 1;
    margin: 0 4px;
    cursor: pointer;
  }

  .banner-points .banner-point:hover {
    background: hsla(0,0%,100%,.4);
    border-color: rgba(0,0,0,.4);
  }

  .banner-points .active {
    background: hsla(0,0%,100%,.4);
    border-color: rgba(0,0,0,.4);
  }

  .banner-container {
    position: relative;
    display: flex;
  }

  .banner-slide {
    transition: all 1s ease-in-out;
  }

  .banner-container .image-container {
    width: 600px;
    height: 400px;
  }

  .image-container a {
    display: block;
  }

  .image-container a img {
    width: 600px;
    height: 400px;
  }
</style>