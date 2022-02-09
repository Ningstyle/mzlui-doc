export default [
  {
    path:'/mzlui',
    name:'mzlui',
    component:()=> import('@/page/home.vue'),
    meta:{
			requireAuth: true,
			title:"组件首页"
		},
    children:[
      {
        path:'',
        name:'notice',
        component:()=> import('@/page/packages/notice.vue'),
        meta:{
          requireAuth: true,
          title:"须知"
        },
        children:[]
      },
      {
        path:'install',
        name:'install',
        component:()=> import('@/page/packages/install.vue'),
        meta:{
          requireAuth: true,
          title:"安装"
        },
        children:[]
      },
      {
        path:'demo',
        name:'demo',
        component:()=> import('@/page/packages/demo.vue'),
        meta:{
          requireAuth: true,
          title:"demo"
        },
        children:[]
      },
      {
        path:'layout',
        name:'layout',
        component:()=> import('@/page/packages/layout.vue'),
        meta:{
          requireAuth: true,
          title:"layout"
        },
        children:[]
      },
			{
			  path:'button',
			  name:'button',
			  component:()=> import('@/page/packages/button.vue'),
			  meta:{
			    requireAuth: true,
			    title:"按钮"
			  },
			  children:[]
			}
    ]
  },
]