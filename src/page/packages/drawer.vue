<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-button @click="openDrawer">基本使用</m-button>
  <m-drawer v-model="drawerShow" title="基本使用" @confirm="confirmFn" @cancel="cancelFn">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-button @click="openDrawerOfLeft">左边-left</m-button>
  <m-button @click="openDrawerOfTop">上边-top</m-button>
  <m-button @click="openDrawerOfRight">右边-right</m-button>
  <m-button @click="openDrawerOfBottom">下边-bottom</m-button>
  <m-drawer v-model="drawerShow1" title="左边出现的抽屉">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
  <m-drawer v-model="drawerShow2" title="上边出现的抽屉" direction="top">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
  <m-drawer v-model="drawerShow3" title="右边出现的抽屉" direction="right">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
  <m-drawer v-model="drawerShow4" title="下边出现的抽屉" direction="bottom">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-button @click="openCustomDrawer">自定义</m-button>
  <m-drawer v-model="drawerShow5">
    <template #header>
      这是头部自定义信息
      <m-button size="small" type="primary" style="position: absolute;right:20px">自定义</m-button>
    </template>
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
    <template #footer>
      这是底部自定义信息
    </template>
  </m-drawer>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options2"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { ref,reactive } from 'vue';
  import { Message } from 'mzl-ui'
  import { VueComponent as md1Md } from '@/page/md/drawer/md1.md';
  import { VueComponent as md2Md } from '@/page/md/drawer/md2.md';
  import { VueComponent as md3Md } from '@/page/md/drawer/md3.md';
  import { VueComponent as md4Md } from '@/page/md/drawer/md4.md';
  const drawerShow = ref(false)
  const drawerShow1 = ref(false)
  const drawerShow2 = ref(false)
  const drawerShow3 = ref(false)
  const drawerShow4 = ref(false)
  const drawerShow5 = ref(false)
  const openDrawer = () =>{
    drawerShow.value = true
  }
  const confirmFn = () =>{
    Message({text: "确认事件"})
  }
  const cancelFn = () =>{
    Message({text: "取消事件"})
  }
  const openDrawerOfLeft = () =>{
    drawerShow1.value = true
  }
  const openDrawerOfTop = () =>{
    drawerShow2.value = true
  }
  const openDrawerOfRight = () =>{
    drawerShow3.value = true
  }
  const openDrawerOfBottom = () =>{
    drawerShow4.value = true
  }
  const openCustomDrawer = () =>{
    drawerShow5.value = true
  }
  const state = reactive({
    options1:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'title',type:'String',red:'抽屉标题，如果使用header具名插槽后将失效',sel:'——',def:"标题"},
        {attr:'v-model',type:'Boolean',red:'是否显示抽屉',sel:'true / false ',def:"false"},
        {attr:'direction',type:'String',red:'抽屉出现为方向',sel:'left / top / right / bottom',def:"left"},
        {attr:'width',type:'String',red:'抽屉区域宽度，direction 为 left 和 right 时有效',sel:'——',def:"30%"},
        {attr:'height',type:'String',red:'抽屉区域高度，direction 为 top 和 bottom 时有效',sel:'——',def:"40%"},
        {attr:'closeOnModal',type:'Boolean',red:'是否可通过遮罩层关闭抽屉',sel:'true / false',def:"true"},
        {attr:'showHeader',type:'Boolean',red:'是否显示抽屉头部区域',sel:'true / false',def:"true"},
        {attr:'showFooter',type:'Boolean',red:'是否显示抽屉底部区域',sel:'true / false',def:"true"},
        {attr:'showClose',type:'Boolean',red:'是否显示左上角关闭按钮',sel:'true / false',def:"true"},
        {attr:'confirmText',type:'String',red:'右上角确定按钮文本',sel:'——',def:"确定"},
        {attr:'cancelText',type:'String',red:'右上角取消按钮文本',sel:'——',def:"取消"},
        {attr:'confirmShow',type:'Boolean',red:'是否显示右上角确定按钮',sel:'true / false',def:"true"},
        {attr:'cancelShow',type:'Boolean',red:'是否显示右上角取消按钮',sel:'true / false',def:"true"},
        {attr:'customClass',type:'Boolean',red:'抽屉组件自定义类名',sel:'——',def:"——"},
        {attr:'#header',type:'String',red:'抽屉顶部区域具名插槽名',sel:'——',def:"——"},
        {attr:'#content',type:'String',red:'抽屉内容区域具名插槽名',sel:'——',def:"——"},
        {attr:'#footer',type:'String',red:'抽屉底部区域具名插槽名',sel:'——',def:"——"}
      ]
    },
    options2:{
      fileds:[
        {field:'name',title:'事件名',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'attr',title:'回调参数',align:'center'},
        {field:'exm',title:'示例',align:'center',width:'350px'}
      ],
      datas:[
        {name:"close",red:'抽屉关闭事件',attr:'()',exm:'close = () =>{}'},
        {name:"confirm",red:'右上角确定按钮点击事件',attr:'()',exm:'confirm = () =>{}'},
        {name:"cancel",red:'右上角取消按钮点击事件',attr:'()',exm:'cancel = () =>{}'},
      ]
    }
  })
  const {options1,options2} = state
</script>

<style>
</style>
