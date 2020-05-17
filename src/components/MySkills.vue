<template>
    <div id="main" style="width: 400px;height:400px;" ref="echarts"></div>   
</template>

<script>
import echarts from 'echarts'
export default {
     data(){
   return{
   }
  },
  mounted(){
        let myChart =echarts.init(this.$refs.echarts);
        let option = {
            title: {
                text: '个人技能',
                textStyle: {
                    color: 'rgba(221,221,221,1)', //标题颜色
                    fontSize: 14,
                    lineHeight: 20,
                },
                left: 'center',
                top: 'bottom',
                },
                tooltip: {},
                radar : [{
                        nameGap : 5, // 图中工艺等字距离图的距离
                        name:{
                           show: true, // 是否显示工艺等文字
                           formatter: null, // 工艺等文字的显示形式
                           textStyle: {
                               color: '#F5DD8F',
                               fontSize:'30px',
                               }
                        },
                        indicator : [
                           {name: 'HTML/HTML5', max: 100},
                            {name: 'CSS/CSS3', max: 100},
                            {name: 'JavaScript', max: 100},
                            {name: 'Vue.js', max: 100},
                            {name: '微信小程序', max: 100},
                            {name: 'Java', max: 100}
                        ],
                        axisLine: {            // 坐标轴线
                            show: false        // 默认显示，属性show控制显示与否
                        }
                    }
                ],   
        series: [{
            name: '能力',
            type: 'radar',
            areaStyle: {
                type: 'default',
                opacity: 0.6, // 图表中各个图区域的透明度
                color: "#3399CC" // 图表中各个图区域的颜色

            },
            data: [
                {name: "能力值", value: [70, 70, 70, 70,60, 60]}
            ]
        }]
    };  
    //使用制定的配置项和数据显示图表
    myChart.setOption(option); 
    
  }
}
</script>
<style lang="less" scoped>

</style>