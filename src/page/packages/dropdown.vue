<template>
  <div v-highlight>
    <dd1-md></dd1-md>
  </div>
  <m-dropdown title="下拉菜单" :options="dorpoptions" @change="dropchange"></m-dropdown>
  <div v-highlight>
    <dd2-md></dd2-md>
  </div>
  <span style="margin-right:1vw">
    <m-dropdown title="默认大小" :options="dorpoptions"></m-dropdown>
  </span>
  <span style="margin-right:1vw">
    <m-dropdown title="小一点的" :options="dorpoptions" size="small"></m-dropdown>
  </span>
  <span style="margin-right:1vw">
    <m-dropdown title="更小点的" :options="dorpoptions" size="mini"></m-dropdown>
  </span>
  <div v-highlight>
    <dd3-md></dd3-md>
  </div>
  <m-dropdown title="下拉菜单" :options="dorpoptions1"></m-dropdown>
  <div v-highlight>
    <dd4-md></dd4-md>
  </div>
  <span style="margin-right:1vw">
    <m-dropdown title="hover唤醒" :options="dorpoptions1"></m-dropdown>
  </span>
  <span style="margin-right:1vw">
    <m-dropdown title="click唤醒" :options="dorpoptions1" trigger="click"></m-dropdown>
  </span>
  <div v-highlight>
    <dd6-md></dd6-md>
  </div>
  <span style="margin-right:1vw">
    <m-dropdown title="下拉菜单" :options="dorpoptions1" @change="dropchange">
    	<template #Img>
    		<img src="https://mzlui.codeym.com/head.png" alt="">
    	</template>
    </m-dropdown>
  </span>
  <span style="margin-right:1vw">
    <m-dropdown title="下拉菜单" :options="dorpoptions1" @change="dropchange" size="small">
    	<template #Img>
    		<img src="https://mzlui.codeym.com/head.png" alt="">
    	</template>
    </m-dropdown>
  </span>
  <span style="margin-right:1vw">
    <m-dropdown title="下拉菜单" :options="dorpoptions1" @change="dropchange" size="mini">
    	<template #Img>
    		<img src="https://mzlui.codeym.com/head.png" alt="">
    	</template>
    </m-dropdown>
  </span>
  <div v-highlight>
    <dd5-md></dd5-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">options API</p>
  <span class="titlespan">数据配置项</span>
  <m-table :options="options2"></m-table>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options3"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { VueComponent as dd1Md } from '@/page/md/dropdown/dd1.md';
  import { VueComponent as dd2Md } from '@/page/md/dropdown/dd2.md';
  import { VueComponent as dd3Md } from '@/page/md/dropdown/dd3.md';
  import { VueComponent as dd4Md } from '@/page/md/dropdown/dd4.md';
  import { VueComponent as dd5Md } from '@/page/md/dropdown/dd5.md';
  import { VueComponent as dd6Md } from '@/page/md/dropdown/dd6.md';
  import {reactive} from 'vue'
  const state = reactive({
    dorpoptions:[
      {"label":"菜单1"},
      {"label":"菜单2"},
      {"label":"菜单3"},
      {"label":"菜单4"},
      {"label":"菜单5"},
    ],
    dorpoptions1:[
    	{"label":"菜单1","icon":'m-icon-file'},
    	{"label":"菜单2","icon":'m-icon-keyboard-9'},
    	{"label":"菜单3","icon":'m-icon-link'},
    	{"label":"菜单4","icon":'m-icon-file'}
    ],
    options1:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'title',type:'String',red:'下拉菜单标题',sel:'——',def:"——"},
        {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
        {attr:'options',type:'Array',red:'下拉菜单数据配置，具体见下方 options API',sel:'——',def:"[]"},
        {attr:'trigger',type:'String',red:'唤醒方式',sel:'hover / click',def:"hover"},
        {attr:'customClass',type:'String',red:'自定义下拉菜单类名',sel:'——',def:"——"},
      ]
    },
    options2:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'label',type:'String',red:'固定值，菜单名称',sel:'——',def:"——"},
        {attr:'icon',type:'String',red:'固定值，图标名称',sel:'参考图标库',def:"——"}
      ]
    },
    options3:{
     fileds:[
        {field:'name',title:'事件名',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'attr',title:'回调参数',align:'center'},
        {field:'exm',title:'示例',align:'center',width:'350px'}
      ],
      datas:[
        {name:"change",red:'下拉菜单选择事件',attr:'(value: item,index)',exm:'change = (item,index) =>{console.log(item,index)}'},
      ]
    }
  })
  const dropchange = (item,index) =>{
  	console.log(item,index);
  }
  const {dorpoptions,dorpoptions1,options1,options2,options3} = state
</script>

<style lang="scss" scoped>
</style>
