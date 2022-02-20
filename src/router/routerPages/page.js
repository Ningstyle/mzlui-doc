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
          title:"布局"
        },
        children:[]
      },
      {
        path:'color',
        name:'color',
        component:()=> import('@/page/packages/color.vue'),
        meta:{
          requireAuth: true,
          title:"颜色"
        },
        children:[]
      },
			{
			  path:'icon',
			  name:'icon',
			  component:()=> import('@/page/packages/icon.vue'),
			  meta:{
			    requireAuth: true,
			    title:"图标"
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
			},
      {
			  path:'input',
			  name:'input',
			  component:()=> import('@/page/packages/input.vue'),
			  meta:{
			    requireAuth: true,
			    title:"输入框"
			  },
			  children:[]
			},
      {
			  path:'select',
			  name:'select',
			  component:()=> import('@/page/packages/select.vue'),
			  meta:{
			    requireAuth: true,
			    title:"下拉框"
			  },
			  children:[]
			},
			{
			  path:'dropdown',
			  name:'dropdown',
			  component:()=> import('@/page/packages/dropdown.vue'),
			  meta:{
			    requireAuth: true,
			    title:"下拉菜单"
			  },
			  children:[]
			},
      {
			  path:'table',
			  name:'table',
			  component:()=> import('@/page/packages/table.vue'),
			  meta:{
			    requireAuth: true,
			    title:"表格"
			  },
			  children:[]
			}
    ]
  },
]