<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-button @click="openModal">打开模态框</m-button>
  <m-modal v-model="modalShow" title="模态框标题">
    <template #content>
      这是内容区域
    </template>
    <template #footer>
      <m-button size="small" style="margin-right:15px" @click="modalShow = false">取消</m-button>
      <m-button type="primary" size="small" @click="modalShow = false">确认</m-button>
    </template>
  </m-modal>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-button @click="openModal1">打开模态框</m-button>
  <m-modal v-model="modalShow1" title="模态框标题" align="center" width="30%">
    <template #content>
      这是内容区域
    </template>
    <template #footer>
      <m-button size="small" style="margin-right:15px" @click="modalShow1 = false">取消</m-button>
      <m-button type="primary" size="small" @click="modalShow1 = false">确认</m-button>
    </template>
  </m-modal>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-button @click="openModal2">自定义</m-button>
  <m-modal v-model="modalShow2" :closeOnModal="false">
    <template #header>
      <i class="m-icon-email" style="font-size: 17px;"></i> 新的邮件
    </template>
    <template #content>
      <m-input v-model="value" clearable @clear="clear" placeholder="请输入"></m-input>
      <p>输入的值为：{{value}}</p>
    </template>
    <template #footer>
      <m-button type="primary" size="small" @click="send">发送</m-button>
    </template>
  </m-modal>
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
  import { VueComponent as md1Md } from '@/page/md/modal/md1.md';
  import { VueComponent as md2Md } from '@/page/md/modal/md2.md';
  import { VueComponent as md3Md } from '@/page/md/modal/md3.md';
  import { VueComponent as md4Md } from '@/page/md/modal/md4.md';
  import { Message } from 'mzl-ui'
  import {ref,reactive} from 'vue'
  const modalShow = ref(false)
  const modalShow1 = ref(false)
  const modalShow2 = ref(false)
  const value = ref('')
  const openModal = () =>{
    modalShow.value = true
  }
  const openModal1 = () =>{
    modalShow1.value = true
  }
  const openModal2 = () =>{
    modalShow2.value = true
  }
  const send = () =>{
    if(value.value==""){
      Message({ type: "warn",text: "请输入内容!"})
    }else{
      modalShow2.value = false
      setTimeout(()=>{
        Message({type: "success",text: "发送成功!"})
      },500)
    }
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
        {attr:'title',type:'String',red:'弹窗标题，如果使用header具名插槽后将失效',sel:'——',def:"标题"},
        {attr:'v-model',type:'Boolean',red:'是否显示弹窗',sel:'true / false ',def:"false"},
        {attr:'align',type:'String',red:'是否居中布局',sel:'center',def:"——"},
        {attr:'width',type:'String',red:'弹窗宽度',sel:'——',def:"35%"},
        {attr:'top',type:'String',red:'弹窗到顶部的距离',sel:'——',def:"15%"},
        {attr:'showClose',type:'Boolean',red:'是否显示关闭按钮',sel:'true / false',def:"true"},
        {attr:'scrollLock',type:'Boolean',red:'弹窗显示时是否锁定滚动条',sel:'true / false',def:"false"},
        {attr:'closeOnModal',type:'Boolean',red:'是否可通过遮罩层关闭弹窗',sel:'true / false',def:"true"},
        {attr:'customClass',type:'String',red:'自定义整体的Class类名',sel:'——',def:"——"},
        {attr:'#header',type:'String',red:'弹窗顶部区域具名插槽名',sel:'——',def:"——"},
        {attr:'#content',type:'String',red:'弹窗内容区域具名插槽名',sel:'——',def:"——"},
        {attr:'#footer',type:'String',red:'弹窗底部区域具名插槽名',sel:'——',def:"——"}
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
        {name:"close",red:'modal关闭事件',attr:'()',exm:'close = () =>{}'}
      ]
    }
  })
  const {options1,options2} = state
</script>

<style>
</style>
