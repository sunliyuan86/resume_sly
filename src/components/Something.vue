<template>
  <div class="container">
    <common></common>
    <div class="something">
      <el-carousel indicator-position="outside" :interval="10000" arrow="hover" height="500px">
        <el-carousel-item>
          <mySkills class="mySkills"></mySkills>
        </el-carousel-item>
        <el-carousel-item>
          <myProjects class="myProjects"></myProjects>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
 
<script>
import mySkills from '@/components/MySkills'
import myProjects from '@/components/MyProjects'
import common from "@/components/common";

export default {
    name: 'Something',
    components:{
     common,
     mySkills,
     myProjects     
    },
    data () {
        return {}
    }
}
</script>

<style lang="less" scoped>
.container {
  background: url(../assets/img/star3.jpg) no-repeat transparent;
  height: 100%;

}
.something {
  width: 1100px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 3px;
}
 
.mySkills{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.myProjects{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>