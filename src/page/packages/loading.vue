<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-button @click="openLoading">开始加载</m-button>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-button @click="openLoading1">点击加载</m-button>
  <div id="loadingTextBox">
    <m-table :options="options" size="small">
      <template #action>
        <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
        <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
      </template>
    </m-table>
  </div>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-button @click="openLoading2">自定义加载图片</m-button>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-button @click="openLoading3">更多自定义配置项</m-button>
  <div v-highlight>
    <md5-md></md5-md>
  </div>
  <m-table :options="options1"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { onMounted, reactive } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/loading/md1.md';
  import { VueComponent as md2Md } from '@/page/md/loading/md2.md';
  import { VueComponent as md3Md } from '@/page/md/loading/md3.md';
  import { VueComponent as md4Md } from '@/page/md/loading/md4.md';
  import { VueComponent as md5Md } from '@/page/md/loading/md5.md';
  import {Loading} from 'mzl-ui'
  const load1 = Loading
  const load2 = Loading
  const load3 = Loading
  const load4 = Loading
  let timer = null
  let timer1 = null
  let timer2 = null
  let timer3 = null
  const openLoading = () =>{
    load1.show()
    clearTimeout(timer)
    timer = setTimeout(()=>{
      load1.hide()
      clearTimeout(timer)
    },5000)
  }
  const openLoading1 = () => {
    load2.show({
      target:"#loadingTextBox"
    })
    clearTimeout(timer1)
    timer1 = setTimeout(()=>{
      load2.hide()
      clearTimeout(timer1)
    },5000)
  }
  const openLoading2 = () => {
    load3.show({
      text:"正在努力加载中...",
      img:"https://mzlui.codeym.com/logo.png"
    })
    clearTimeout(timer2)
    timer2 = setTimeout(()=>{
      load3.hide()
      clearTimeout(timer2)
    },5000)
  }
  const openLoading3 = () => {
    load4.show({
      text:'正在加载mzl-ui...',
      icon:'m-icon-loading3',
      scrollLock:true,
      textColor:'#333',
      bgColor:"rgba(248,253,255,.9)",
      showIcon:true,
    })
    clearTimeout(timer3)
    timer3 = setTimeout(()=>{
      load4.hide()
      clearTimeout(timer3)
    },5000)
  }
  const state = reactive({
    options:{
      fileds:[
        {"field":'name',"title":'姓名',"align":'center'},
        {"field":'job',"title":'职业'},
        {"field":'address',"title":'地址'},
        {"field":'from',"title":'籍贯'},
        {"field":'action',"title":'操作',"width":'200px',"align":'center'}
      ],
      datas:[
        {"name":'王小二',"job":'放羊娃',"address":'在那遥远的小山村',"from":"民间流传故事"},
        {"name":'猪八戒',"job":'徒弟',"address":'高老庄',"from":"西游记神话故事"},
        {"name":'刘老四',"job":'农民',"address":'可能在中国',"from":"想象出来的"},
        {"name":'白骨精',"job":'妖精',"address":'西游记',"from":"西游记神话故事"},
      ]
    },
    options1:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center',width:'350px'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'text',type:'String',red:'加载文字',sel:'——',def:"加载中..."},
        {attr:'icon',type:'String',red:'加载状态图标',sel:'m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6',def:"m-icon-loading1"},
        {attr:'img',type:'String',red:'自定义加载图片，设置后icon将失效',sel:'——',def:"——"},
        {attr:'target',type:'String',red:'绑定区域元素（class或id）,默认body不需要传',sel:'——',def:"body"},
        {attr:'textColor',type:'String',red:'文本颜色',sel:'——',def:"#ffffff"},
        {attr:'bgColor',type:'String',red:'背景颜色',sel:'——',def:"rgba(0, 0, 0, 0.6)"},
        {attr:'showIcon',type:'Boolean',red:'是否显示加载状态图标（icon有效）',sel:'true / false',def:"true"},
        {attr:'scrollLock',type:'Boolean',red:'加载中是否锁定滚动条',sel:'true / false',def:"true"}
      ]
    }
  })
  const {options,options1} = state
</script>

<style lang="scss" scoped>
  #loadingTextBox{
    width:100%;
    height:auto;
    margin-top:1vh;
    border:1px solid #f0f0f0;
    background-color: #fff;
  }
</style>
