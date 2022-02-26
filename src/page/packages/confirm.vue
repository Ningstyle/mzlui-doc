<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-button @click="openConfirm">确认消息</m-button>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-button @click="openConfirm1">自定义配置</m-button>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-table :options="options1"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { VueComponent as md1Md } from '@/page/md/confirm/md1.md';
  import { VueComponent as md2Md } from '@/page/md/confirm/md2.md';
  import { VueComponent as md3Md } from '@/page/md/confirm/md3.md';
  import { Confirm, Message } from 'mzl-ui'
  import {reactive } from 'vue'
  const openConfirm = ()=>{
    Confirm({
      text:'您确认要删除这条数据吗？',
    }).then(() => {
      Message({text:"点击了确定"})
    }).catch(() => {
      Message({text:"点击了取消"})
    })
  }
  const openConfirm1 = () =>{
    Confirm({
      title:"提示信息",
      text: '确认2022-02-02是您的生日吗？',
      icon:"m-icon-calendar",
      confirmText:"是的",
      cancelText:"不是",
      closeShow:false
    }).then(() => {
      Message({text:"是的"})
    }).catch(() => {
      Message({text:"不是"})
    })
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
        {attr:'title',type:'String',red:'弹窗标题文本',sel:'——',def:"提示"},
        {attr:'text',type:'String',red:'弹窗内容文本信息',sel:'——',def:"——"},
        {attr:'icon',type:'String',red:'自定义icon图标',sel:'参考图标库',def:"m-icon-warning"},
        {attr:'confirmText',type:'String',red:'确认按钮文本信息',sel:'——',def:"确认"},
        {attr:'cancelText',type:'String',red:'取消按钮文本信息',sel:'——',def:"取消"},
        {attr:'confirmShow',type:'Boolean',red:'是否显示确认按钮',sel:'true / false',def:"true"},
        {attr:'cancelShow',type:'Boolean',red:'是否显示取消按钮',sel:'true / false',def:"true"},
        {attr:'closeShow',type:'Boolean',red:'是否显示右上角关闭按钮',sel:'true / false',def:"true"},
        {attr:'confirmCallback',type:'Function',red:'确认按钮回调函数',sel:'——',def:"——"},
        {attr:'cancelCallback',type:'Function',red:'取消按钮回调函数',sel:'——',def:"——"},
        {attr:'customClass',type:'String',red:'自定义组件类名',sel:'——',def:"——"}
      ]
    }
  })
  const {options1} = state
</script>

<style>
</style>
