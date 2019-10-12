import { beforeEnter } from '../shared/intercept/router'
import LoginHome from '@/views/login/LoginHome'

export default [
  {
    path: '/loginhome',
    component: LoginHome,
    beforeEnter: beforeEnter
  }
]
