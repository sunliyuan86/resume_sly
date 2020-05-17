<template>
    <div class="home-container">
      <common></common>
      <div class="info">
        <!-- 照片 -->
        <div class="avatar_box">
          <img src="../assets/img/head.jpg" alt />
        </div>
        <div class="persion_info">
              <div class="slyInfo animated slideInLeft">                
                <p>我是孙立媛</p>
                <p>2016年计算机专业毕业</p>
                <p>有三年多的工作经验啦(*^▽^*)</p>              
                <p>目前居住在闵行区江月路附近</p>
                <p>前端即兴趣，兴趣即未来</p>
                <p>❤期待有机会与您共事❤</p>
              </div>      
        </div>
        <div class="persion_skill">
            <mySkills></mySkills>                          
        </div>      
      </div>
    </div>
</template>
<script>
import common from '@/components/common'
import mySkills from '@/components/MySkills'

export default {
  name: 'myInfo',
  components:{
  common,
  mySkills
 },
  data(){
   return{
   }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  background: url(../assets/img/star3.jpg) no-repeat transparent;
  height: 100%;
}
.info {
  width: 1100px;
  height: 500px;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color:rgba(192,192,192,0.2);
  border-radius: 3px;

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

.persion_info {
    height:400px ;
    width: 400px;
    position: absolute;
    top: 10%;
    left: 5%;

  .slyInfo {
    position:absolute;
    left: 18%;
    margin-top: 6%;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    
    p {
      color: #F5DD8F;
      font-family: firefly;       
    }
  }
}
  .persion_skill {
      height:400px ;
      width: 400px;
      position: absolute;
      display: flex;
      top: 10%;
      left: 55%;
  }
}
</style>