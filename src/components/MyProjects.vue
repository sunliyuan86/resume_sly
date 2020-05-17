<template>
    <div>
        <el-table :data="tableData" stripe border style="width: 100%" >
            <el-table-column prop="project_name" label="项目名称" width="180">
            </el-table-column>
            <el-table-column prop="project_skill" label="主要技术" width="180">
            </el-table-column>     
            <el-table-column prop="project_duty" label="项目功能" width="388">
            </el-table-column>
        </el-table>    
    </div>
</template>
<script>
export default {
    name: "myProjects",
    data() {
        return {
               tableData: [{
          project_name: 'Vue商城（App+小程序）',
          project_skill: 'Vue/uni-app/Vue-router/Vuex',
          project_duty: '电商项目,主要功能用户登录注册、商品搜索、商品详情、购物车以及支付、商品分享等功能。'
        }, {
          project_name: '电商后台管理系统（PC端）',
          project_skill: 'Vue/Vue-router/Element-UI/Axios/ECharts',
          project_duty: '用于管理用户账号、商品分类、商品信息、订单、数据统计等业务功能。'
        }, {
         project_name: 'H5网页宣传',
          project_skill: 'HTML5/CSS3/Bootstrap/jQuery',
          project_duty: '展示性网页，注重炫酷效果的展示。'
        },{
          project_name: 'PIDSCN_SPPHINS',
          project_skill: 'Spring/SpringMVC/MyBatis/Redis/EasyUI',
          project_duty: '一款进销存系统，主要包含主数据、订货管理、退货管理、收发货管理等模块。'    
        }]
        }
    }
}
</script>
<style lang="less" scoped>
  .projects{
    height:400px ;
    width: 750px;
    position: absolute;
    top: 10%;
    left: 30%;
  }
.el-table{
    opacity: 0.8;
}
</style>