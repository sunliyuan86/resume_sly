import Vue from 'vue'
import Router from 'vue-router'
import MyInfo from '@/components/MyInfo'
import myExperience from '@/components/MyExperience'
import something from '@/components/Something'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/myExperience',
      name: 'myExperience',
      component: myExperience
    }  ,{
      path: '/something',
      name: 'something',
      component: something
    } 
  ]
})
