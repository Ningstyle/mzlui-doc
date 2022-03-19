import {createRouter,createWebHashHistory} from 'vue-router'
import BaseRouter from './routerPages/base'
import PageRouter from './routerPages/page'
const router = createRouter({
  history:createWebHashHistory(),
  scrollBehavior:((to, from, savedPosition)=>{
    document.title = to.meta.title
    if(to.fullPath!='/'){
      document.querySelector('.mzluirightView').scrollTop = 0
    }
    
  }),
  routes:[...BaseRouter,...PageRouter]
})
export default router