<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-pagination :total="200" :current="1" :pageSize="10" :maxSize="8"></m-pagination>
  <m-pagination :total="1000" :current="1" :pageSize="20" :maxSize="20"></m-pagination>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-pagination :total="100" :current="1" :pageSize="10" prevText="上一页" nextText="下一页" showTotal jumper></m-pagination>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-pagination :total="200" :current="1" :pageSize="10" :activeColors="activeColors"></m-pagination>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">activeColors 配置项</p>
  <m-table :options="options3"></m-table>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options2"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/pagination/md1.md';
  import { VueComponent as md2Md } from '@/page/md/pagination/md2.md';
  import { VueComponent as md3Md } from '@/page/md/pagination/md3.md';
  import { VueComponent as md4Md } from '@/page/md/pagination/md4.md';
  const state = reactive({
    activeColors:{
      "background":"#014B88",
      "hoverBackground":"#2684e1",
      "borderColor":"#014B88",
      "hoverBorderColor":"#005ba6",
      "color":"#fff",
      "hoverColor":"#fff"
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
        {attr:'total',type:'Number',red:'数据总条数',sel:'——',def:"——"},
        {attr:'current',type:'Number',red:'当前页',sel:'——',def:"1"},
        {attr:'pageSize',type:'Number',red:'每页展示条数',sel:'——',def:"10"},
        {attr:'maxSize',type:'Number',red:'每页最大展示页数',sel:'——',def:"10"},
        {attr:'border',type:'Boolean',red:'是否需要border',sel:'true / false',def:"true"},
        {attr:'size',type:'String',red:'按钮大小',sel:'default / small',def:"default"},
        {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
        {attr:'prevText',type:'String',red:'自定义上一页按钮文本',sel:'——',def:"——"},
        {attr:'nextText',type:'String',red:'自定义下一页按钮文本',sel:'——',def:"——"},
        {attr:'align',type:'String',red:'分页组件对齐方式',sel:'left / center / right',def:"left"},
        {attr:'showTotal',type:'Boolean',red:'是否显示总条数',sel:'true / false',def:"false"},
        {attr:'jumper',type:'Boolean',red:'是否显示跳转到指定页',sel:'true / false',def:"false"},
        {attr:'activeColors',type:'Object',red:'自定义分页样式，见下方activeColors配置',sel:'——',def:"{}"},
      ]
    },
    options3:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center',width:'350px'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'background',type:'String',red:'默认背景颜色',sel:'——',def:"#fff"},
        {attr:'hoverBackground',type:'String',red:'鼠标移入或选中时背景颜色',sel:'——',def:"#fff"},
        {attr:'borderColor',type:'String',red:'默认边框颜色',sel:'——',def:"#d9d9d9"},
        {attr:'hoverBorderColor',type:'String',red:'鼠标移入或选中时边框颜色',sel:'——',def:"#0e80eb"},
        {attr:'color',type:'String',red:'默认文本颜色',sel:'——',def:"#505050"},
        {attr:'hoverColor',type:'String',red:'鼠标移入或选中时文本颜色',sel:'——',def:"#0e80eb"},
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
        {name:"change",red:'分页改变时触发',attr:'(value:value)',exm:'change = (e) =>{console.log(e)}'}
      ]
    }
  })
  const {options1,options2,options3,activeColors} = state
</script>

<style lang="scss" scoped>
</style>
