<template>
    <div class="project_container">    
        <common></common>
        <div class="projectInfo">
             <div class="company">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :icon="activity.icon"
                  :type="activity.type"
                  :color="activity.color"
                  :size="activity.size"
                  :timestamp="activity.timestamp">
                  
                   <p class="timeline-content">{{activity.content}}</p>
                </el-timeline-item>
              </el-timeline>
             </div>

            <div class="projects">
              <myProjects></myProjects>             
            </div>
        </div>    
   </div>
</template>

<script>
import common from '@/components/common'
import myProjects from '@/components/MyProjects'
 export default {
     name: "myExperience",
     components:{
       common,
       myProjects
     },
    data() {
      return {
        activities: [{
            content: '毕业于江苏海洋大学计算机工程学院',
            timestamp: '2016-07',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
            }, {
              content: '就职上海米思软件科技有限公司',
              timestamp: '2016-11',
              color: '#84c800'
            },{
              content: '离职',
              timestamp: '2019-05'
            }, {
              content: '就职候鸟会计服务（江阴）有限公司',
              timestamp: '2019-07',
              color: '#84c800'
            }, {
              content: '离职',
              timestamp: '2020-03'
            }]
      };
    }
  };
</script>

<style lang="less" scoped>
.project_container {
 background: url(../assets/img/star3.jpg) no-repeat transparent;
  height: 100%;
  overflow: hidden;
}

.projectInfo {
  width: 1100px;
  height: 500px;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
   background-color:rgba(192,192,192,0.2);
  // background-color: azure;
  border-radius: 3px;

     .company {
      height:400px ;
      width: 300px;
      position: absolute;
      top: 10%;
      left: 0;
  }
  .timeline-content {   
    font-size: 14px;
    color: #F5DD8F;
    font-family: firefly;
  }
  .projects{
    height:400px ;
    width: 750px;
    position: absolute;
    top: 12%;
    left: 30%;
  }
}
</style>