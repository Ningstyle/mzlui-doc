<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-table :options="options1"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { onMounted,reactive } from 'vue'
  import { VueComponent as md1Md } from '@/page/md/formatDate/md1.md';
  import { $mzl } from 'mzl-ui'
  onMounted(()=>{
    
  })
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
        {attr:'arguments[0]',type:'Date',red:'要转换的时间戳，number类型，配合new Date()使用,例如：new Date(1609412149000)',sel:'——',def:"——"},
        {attr:'arguments[1]',type:'String',red:'输出日期时间的格式',sel:'yyyy-MM-dd hh:mm:ss',def:"——"},
      ]
    }
  })
  const {options1} = state
</script>

<style>
</style>
