<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-switch v-model="switchVal" @change="switchChange"></m-switch>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-switch v-model="switchVal4" disabled></m-switch>
  <div v-highlight>
    <md6-md></md6-md>
  </div>
  <m-switch v-model="switchVal1" :showTipsText="true"></m-switch>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-switch v-model="switchVal2" closeText="关闭" activeText="开启"></m-switch>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-switch v-model="switchVal3" :showTipsText="true" closeColor="#ec3437" activeColor="#09b63d"></m-switch>
  <div v-highlight>
    <md5-md></md5-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options2"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/switch/md1.md';
  import { VueComponent as md2Md } from '@/page/md/switch/md2.md';
  import { VueComponent as md3Md } from '@/page/md/switch/md3.md';
  import { VueComponent as md4Md } from '@/page/md/switch/md4.md';
  import { VueComponent as md5Md } from '@/page/md/switch/md5.md';
  import { VueComponent as md6Md } from '@/page/md/switch/md6.md';
  const switchVal = ref(false)
  const switchVal1 = ref(false)
  const switchVal2 = ref(true)
  const switchVal3 = ref(false)
  const switchVal4 = ref(true)
  const switchChange = (e) =>{
    console.log(e);
  }
  const state = reactive({
    options1:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center',width:'350px'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'v-model',type:'Boolean',red:'开关状态',sel:'true / false',def:"——"},
        {attr:'width',type:'Number',red:'自定义宽度（单位：px）',sel:'——',def:"45"},
        {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
        {attr:'closeColor',type:'String',red:'关闭状态时的背景色',sel:'——',def:"#BFBFBF"},
        {attr:'activeColor',type:'String',red:'开启状态时的背景色',sel:'——',def:"#0e80eb"},
        {attr:'closeText',type:'String',red:'关闭状态时辅助文字',sel:'——',def:"——"},
        {attr:'activeText',type:'String',red:'开启状态时辅助文字',sel:'——',def:"——"},
        {attr:'textAlign',type:'String',red:'辅助文字位置',sel:'left / right',def:"left"},
        {attr:'showTipsText',type:'Boolean',red:'是否显示提示信息',sel:'true / false',def:"false"}
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
        {name:"change",red:'开关事件',attr:'(value: e)',exm:'change = (e) =>{console.log(e)}'}
      ]
    }
  })
  const {options1,options2} = state
</script>

<style>
</style>
