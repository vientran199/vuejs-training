import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Home11 from '@/components/Home11'
import Computed from '@/components/Computed'
import TaskDetail from '@/components/TaskDetail'
import SignupFormVue from '@/components/formInput/SignupForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hi',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home11',
      name: 'home11',
      component: Home11
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed
    },
    {
      path: '/form',
      name: 'SignupFormVue',
      component: SignupFormVue
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: TaskDetail,
      props: true
    }
  ]
})
