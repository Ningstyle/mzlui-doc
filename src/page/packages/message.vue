<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-button @click="openMsg">消息提示</m-button>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-button @click="openInfo">文本状态</m-button>
  <m-button @click="openSuccess">成功状态</m-button>
  <m-button @click="openWarn">警告状态</m-button>
  <m-button @click="openError">错误状态</m-button>
  <m-button @click="openCustom">自定义</m-button>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-button @click="openMsg1">消息提示</m-button>
  <m-button @click="openMsg2">5秒后消失</m-button>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-table :options="options1"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import {Message} from 'mzl-ui'
  import {reactive} from 'vue'
  import { VueComponent as md1Md } from '@/page/md/message/md1.md';
  import { VueComponent as md2Md } from '@/page/md/message/md2.md';
  import { VueComponent as md3Md } from '@/page/md/message/md3.md';
  import { VueComponent as md4Md } from '@/page/md/message/md4.md';
  const openMsg = () =>{
    Message({
      text: "默认消息提示!"
    })
  }
  const openMsg1 = () =>{
    Message({
      text: "自定义Icon！",
      icon:"m-icon-collection_fill"
    })
  }
  const openMsg2 = () =>{
    Message({
      text:"5秒后消失！",
      icon:"m-icon-good",
      timeout:5000
    })
  }
  const openInfo = () =>{
    Message({
      type: "info",
      text: "文本消息提示!"
    })
  }
  const openSuccess = () =>{
    Message({
      type: "success",
      text: "成功状态消息提示!"
    })
  }
  const openWarn = () =>{
    Message({
      type: "warn",
      text: "警告状态消息提示!"
    })
  }
  const openError = () =>{
    Message({
      type: "error",
      text: "错误状态消息提示!"
    })
  }
  const openCustom = () =>{
    Message({
      type: "custom",
      text: "自定义消息弹窗样式",
      icon:"m-icon-file-common",
      textColor:"#000",
      bgColor:"#e19af3"
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
        {attr:'text',type:'String',red:'消息提示文本内容',sel:'——',def:"——"},
        {attr:'type',type:'String',red:'消息提示类型',sel:'info / warn / error / success / custom',def:"info"},
        {attr:'icon',type:'String',red:'消息提示Icon图标',sel:'参考图标库',def:"——"},
        {attr:'timeout',type:'Number',red:'消息提示框消失时间（单位：毫秒ms）',sel:'——',def:"2500"},
        {attr:'textColor',type:'String',red:'文本颜色，type 为 custom 时有效',sel:'——',def:"——"},
        {attr:'bgColor',type:'String',red:'背景颜色，type 为 custom 时有效',sel:'——',def:"——"},
        {attr:'customClass',type:'String',red:'自定义组件类名',sel:'——',def:"——"}
      ]
    }
  })
  const {options1} = state
</script>

<style>
</style>
