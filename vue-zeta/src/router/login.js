import { beforeEnter } from '../shared/intercept/router'
import LoginHome from '@/views/login/LoginHome'
import Login from '@/views/login/Login'
import Register from '@/views/login/Register'
import Reset from '@/views/login/Reset'

export default [
  {
    path: '/loginhome',
    component: LoginHome,
    beforeEnter: beforeEnter
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: beforeEnter
  },
  {
    path: '/register',
    component: Register,
    beforeEnter: beforeEnter
  },
  {
    path: '/reset',
    component: Reset,
    beforeEnter: beforeEnter
  }
]
