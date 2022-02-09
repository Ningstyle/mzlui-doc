import {createRouter,createWebHashHistory} from 'vue-router'
import BaseRouter from './routerPages/base'
import PageRouter from './routerPages/page'
const router = createRouter({
  history:createWebHashHistory(),
  scrollBehavior:()=>({y:0}),
  routes:[...BaseRouter,...PageRouter]
})
export default router