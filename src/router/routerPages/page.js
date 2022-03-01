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
        path:'radio',
        name:'radio',
        component:()=> import('@/page/packages/radio.vue'),
        meta:{
          requireAuth: true,
          title:"单选"
        },
        children:[]
      },
      {
        path:'checkbox',
        name:'checkbox',
        component:()=> import('@/page/packages/checkbox.vue'),
        meta:{
          requireAuth: true,
          title:"多选"
        },
        children:[]
      },
      {
        path:'switch',
        name:'switch',
        component:()=> import('@/page/packages/switch.vue'),
        meta:{
          requireAuth: true,
          title:"开关"
        },
        children:[]
      },
      {
        path:'optfile',
        name:'optfile',
        component:()=> import('@/page/packages/optfile.vue'),
        meta:{
          requireAuth: true,
          title:"文件选择"
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
			},
      {
        path:'message',
        name:'message',
        component:()=> import('@/page/packages/message.vue'),
        meta:{
          requireAuth: true,
          title:"消息提示"
        },
        children:[]
      },
      {
        path:'confirm',
        name:'confirm',
        component:()=> import('@/page/packages/confirm.vue'),
        meta:{
          requireAuth: true,
          title:"消息确认"
        },
        children:[]
      },
      {
        path:'modal',
        name:'modal',
        component:()=> import('@/page/packages/modal.vue'),
        meta:{
          requireAuth: true,
          title:"弹窗"
        },
        children:[]
      },
      {
        path:'drawer',
        name:'drawer',
        component:()=> import('@/page/packages/drawer.vue'),
        meta:{
          requireAuth: true,
          title:"抽屉"
        },
        children:[]
      },
      {
        path:'loading',
        name:'loading',
        component:()=> import('@/page/packages/loading.vue'),
        meta:{
          requireAuth: true,
          title:"加载中"
        },
        children:[]
      }
    ]
  },
]