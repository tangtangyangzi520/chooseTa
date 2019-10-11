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
import Home from '@/views/Home'
import Login from '@/views/login/LoginPage'

export default [
  {
    path: '/',
    component: Home,
    beforeEnter: beforeEnter
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: beforeEnter
  },
  {
    path: '/helloworld',
    component: HelloWorld,
    beforeEnter: beforeEnter
  }
]
