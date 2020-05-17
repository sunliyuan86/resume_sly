<template>
  <div id="app">
    <!--路由占位符-->
    <transition >
      <!--  -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
         
    } 
}
}
</script>

<style lang="less" scoped>
 /* 自定义两组样式，来控制 transition 内部的元素实现动画 */
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(-500px);
            /* transform  向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。 */
        }
    /* 入场动画的时间段 */
    /* 离场动画的时间段 */
       .v-enter-active,
       .v-leave-active {
        transition: all 0.8s ease;
       }

       .my-enter,
        .my-leave-to {
            opacity: 0;
            transform: translateX(100px)
        }
    
       .my-enter-active,
       .my-leave-active {
        transition: all 0.8s ease;
       }
</style>
