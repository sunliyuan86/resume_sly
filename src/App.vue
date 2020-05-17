<template>
  <div id="app">
    <!--路由占位符-->
    <transition >
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
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-500px);
  }
   
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
 }
</style>
