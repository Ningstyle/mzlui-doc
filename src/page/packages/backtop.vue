<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-backtop target=".testBacktop"></m-backtop>
  <m-backtop target=".mzluirightView" :bottom="100">
    <span class="backtop">
      <i class="m-icon-direction-up"></i>
    </span>
  </m-backtop>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-table :options="options1"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/backtop/md1.md';
  import { VueComponent as md2Md } from '@/page/md/backtop/md2.md';
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
        {attr:'target',type:'String',red:'触发滚动的元素对象',sel:'——',def:"body"},
        {attr:'visibilityHeight',type:'Number',red:'滚动达到这个距离出现"回到顶部组件"',sel:'——',def:"240"},
        {attr:'right',type:'Number',red:'组件距离右侧的距离',sel:'——',def:"20"},
        {attr:'bottom',type:'Number',red:'组件距离底部的距离',sel:'——',def:"40"},
        {attr:'customClass',type:'String',red:'自定义组件类名',sel:'——',def:"——"},
      ]
    }
  })
  const {options1} = state
</script>

<style lang="scss" scoped>
  .backtop{
    width: 45px;
    height:45px;
    display: inline-block;
    border-radius: 50%;
    line-height: 45px;
    text-align: center;
    background: #f57b29;
    i{
      font-size:20px;
      color:#fff
    }
  }
</style>
