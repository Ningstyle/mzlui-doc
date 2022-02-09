export default [
  {
    path:'/',
    name:'主页',
    component:()=> import('@/page/index.vue'),
    meta:{
			requireAuth: true,
			title:"主页"
		},
    children:[]
  }
]