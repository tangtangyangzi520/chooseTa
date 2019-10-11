// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import { beforeEnter } from '../shared/intercept/router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import home from '@/components/home'
import login from '@/components/login'
export default [
  {
    path: '/',
    component: HelloWorld,
    beforeEnter: beforeEnter
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '(.*)',
    component: login
  }
]
