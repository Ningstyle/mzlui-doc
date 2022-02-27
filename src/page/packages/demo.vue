<template>
  
  <m-title mtitle="Demo 示例" mins="通过demo演示mzl-ui使用的方便性"></m-title>
	<c-title ctitle="组件示例" ctips=""></c-title>
  <div class="items">
    <span><m-button rightIcon="m-icon-add-circle">添加</m-button></span>  
    <span><m-button type="primary" round leftIcon="m-icon-loading2" localing>加载中</m-button></span>
    <span><m-button type="warning" round leftIcon="m-icon-upload">上传</m-button></span>   
  </div>
  <div class="items">
    <m-input v-model="value1"  leftIcon="m-icon-search" clearable></m-input>
    <span style="color:#666;font-size:14px;margin:4px 0 10px 0;display:inline-block">输入的值是：{{value1}}</span>
  </div>
  <m-table :options="options" size="small">
    <template #action>
      <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
      <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
    </template>
  </m-table>
  <div v-highlight>
    <demo-md></demo-md>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import { VueComponent as demoMd } from '@/page/md/demo/demo.md'
import mTitle from '@/components/mtitle.vue'
import cTitle from '@/components/ctitle.vue'
import block from '@/components/block.vue'
const value1 = ref('')
const state = reactive({
  options:{
    fileds:[
      {field:'name',title:'姓名',align:'center'},
      {field:'job',title:'职业'},
      {field:'address',title:'地址'},
      {field:'from',title:'籍贯'},
      {field:'action',title:'操作',width:'200px',align:'center'}
    ],
    datas:[
      {name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  }
})
const {options} = state
</script>

<style lang="scss" scoped>
span{
  margin-right:10px;
}
</style>