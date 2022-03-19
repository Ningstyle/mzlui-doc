export default [
  {
    path:'/',
    name:'mzl-ui',
    component:()=> import('@/page/index.vue'),
    meta:{
			requireAuth: true,
			title:"mzl-ui"
		},
    children:[]
  }
]