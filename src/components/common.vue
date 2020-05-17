<template>
  <div class="keys">
    <button @click="toMyInfo" ><p>个人信息</p></button> 
    <button @click="toProjects"><p>项目经验</p></button>
    <button @click="toC"><p>❤❤❤❤</p></button>
  </div>
</template>
<script>
export default {
   name: 'common',
   methods:{
     async toMyInfo(){
         await this.$router.push("/");
     },
     async toProjects(){
       await this.$router.push("/myExperience");
     },
     async toC(){
        await this.$router.push("/something");
     }
  }
};
</script>

<style lang="less" scoped>
.keys {
  position: absolute;
  left: 0;
  top: 30%;
  display: hidden;
}

button {
  outline: none;
  border: none;
  display: flex;
  margin-top: 20%;
  margin-left: 5%;
  width: 110px;
  height: 50px;
  background: linear-gradient(to right, #6495ED 10%, #55B455);
  border-radius: 40px;
  transition:all 2s ease;
    :hover {
      box-shadow: 20px 0 10px 0px #55B455;
      transform: scale(1.3);
    }
    p {
      line-height: 8px;
      font-size: 20px;
      color: #F5DD8F;
      margin-left: 10%;
      font-family: firefly;
      text-align: center;

    }
}
   
</style>