import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
