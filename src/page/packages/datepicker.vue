<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-date 
    v-model="dateVal"
    @change="dateChange"
    placeholder="请选择日期">
  </m-date>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-date
    v-model="dateVal1"
    disabled
    placeholder="请选择日期">
  </m-date>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <span style="margin-right:50px;">
    <m-date
      v-model="dateVal2"
      placeholder="请选择日期">
    </m-date>
  </span>
  <span style="margin-right:50px;">
    <m-date
      v-model="dateVal3"
      placeholder="请选择日期"
      size="small">
    </m-date>
  </span>
  <span>
    <m-date
      v-model="dateVal4"
      placeholder="请选择日期"
      size="mini">
    </m-date>
  </span>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-date
    v-model="dateVal5"
    placeholder="请选择日期"
    type="year">
  </m-date>
  <div v-highlight>
    <md5-md></md5-md>
  </div>
  <m-date
    v-model="dateVal6"
    placeholder="请选择日期"
    type="month">
  </m-date>
  <div v-highlight>
    <md6-md></md6-md>
  </div>
  <span style="margin-right:50px;">
    <m-date
      v-model="dateVal7"
      placeholder="请选择日期"
      format="yyyy年MM月dd日">
    </m-date>
  </span>
  <span style="margin-right:50px;">
    <m-date
      v-model="dateVal8"
      placeholder="请选择日期"
      format="yyyy/MM/dd">
    </m-date>
  </span>
  <span>
    <m-date
      v-model="dateVal9"
      placeholder="请选择日期"
      format="yyyy-MM-dd">
    </m-date>
  </span>
  <div v-highlight>
    <md7-md></md7-md>
  </div>
  <m-date
    v-model="dateVal10"
    placeholder="请选择日期"
    :startDate="startDate"
    :endDate="endDate">
  </m-date>
  <div v-highlight>
    <md8-md></md8-md>
  </div>
  <span style="margin-right:50px;">
    <m-date
      v-model="dateVal11"
      placeholder="请选择日期"
      customActiveColor="#09b63d">
    </m-date>
  </span>
  <span>
    <m-date
      v-model="dateVal12"
      placeholder="请选择日期"
      customActiveColor="#f57b29">
    </m-date>
  </span>
  <div v-highlight>
    <md9-md></md9-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">format 日期格式说明</p>
  <m-table :options="options3"></m-table>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options2"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { reactive,ref,computed } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/datepicker/md1.md';
  import { VueComponent as md2Md } from '@/page/md/datepicker/md2.md';
  import { VueComponent as md3Md } from '@/page/md/datepicker/md3.md';
  import { VueComponent as md4Md } from '@/page/md/datepicker/md4.md';
  import { VueComponent as md5Md } from '@/page/md/datepicker/md5.md';
  import { VueComponent as md6Md } from '@/page/md/datepicker/md6.md';
  import { VueComponent as md7Md } from '@/page/md/datepicker/md7.md';
  import { VueComponent as md8Md } from '@/page/md/datepicker/md8.md';
  import { VueComponent as md9Md } from '@/page/md/datepicker/md9.md';
  const dateVal = ref("")
  const dateVal1 = ref("")
  const dateVal2 = ref("")
  const dateVal3 = ref("")
  const dateVal4 = ref("")
  const dateVal5 = ref("")
  const dateVal6 = ref("")
  const dateVal7 = ref("")
  const dateVal8 = ref("")
  const dateVal9 = ref("")
  const dateVal10 = ref("")
  const dateVal11 = ref("")
  const dateVal12 = ref("")
  const startDate = computed(()=>{
    let date = new Date()
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-10).toLocaleDateString()
  })
  const endDate = computed(()=>{
    let date = new Date()
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()+10).toLocaleDateString()
  })
  const dateChange = (e) => {
    // console.log(e);
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
        {attr:'v-model',type:'String',red:'可被 new Date() 解析的字符串，例如：2022-02-01,2022/02/01',sel:'——',def:"——"},
        {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
        {attr:'placeholder',type:'String',red:'输入框占位字符',sel:'——',def:"——"},
        {attr:'size',type:'String',red:'组件尺寸',sel:'default / small / mini',def:"default"},
        {attr:'format',type:'String',red:'日期格式，见下方日期格式说明',sel:'——',def:"yyyy/MM/dd"},
        {attr:'clearable',type:'Boolean',red:'是否可清空',sel:'true / false',def:"false"},
        {attr:'type',type:'String',red:'日期选择类型',sel:'date / year / month',def:"date"},
        {attr:'showToday',type:'Boolean',red:'是否显示 "今天" 快捷按钮',sel:'true / false',def:"true"},
        {attr:'form',type:'String',red:'原生属性，所属表单',sel:'——',def:"——"},
        {attr:'startDate',type:'String',red:'限制可选择开始日期，可被 new Date() 解析的字符串',sel:'——',def:"——"},
        {attr:'endDate',type:'String',red:'限制可选择结束日期，可被 new Date() 解析的字符串',sel:'——',def:"——"},
        {attr:'customActiveColor',type:'String',red:'自定义组件活动元素的色值',sel:'——',def:"#0e80eb"},
        {attr:'customClass',type:'String',red:'自定义组件日期面板类名',sel:'——',def:"——"},
      ]
    },
    options3:{
      fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'example',title:'举例',align:'center'},
        {field:'sel',title:'可选值',align:'center',width:'350px'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'yyyy',red:'年',example:'2022',sel:'——',def:"——"},
        {attr:'M',red:'月（不补0）',example:'1',sel:'——',def:"——"},
        {attr:'MM',red:'月（补0）',example:'01',sel:'——',def:"——"},
        {attr:'d',red:'日（不补0）',example:'9',sel:'——',def:"——"},
        {attr:'dd',red:'日（补0）',example:'09',sel:'——',def:"——"},
        {attr:'H',red:'时，24小时制（不补0）',example:'9',sel:'——',def:"——"},
        {attr:'HH',red:'时，24小时制（补0）',example:'09',sel:'——',def:"——"},
        {attr:'h',red:'时，12小时制（不补0）',example:'9',sel:'——',def:"——"},
        {attr:'hh',red:'时，12小时制（补0）',example:'09',sel:'——',def:"——"},
        {attr:'m',red:'分（不补0）',example:'9',sel:'——',def:"——"},
        {attr:'mm',red:'分（补0）',example:'09',sel:'——',def:"——"},
        {attr:'s',red:'秒（不补0）',example:'9',sel:'——',def:"——"},
        {attr:'ss',red:'秒（补0）',example:'09',sel:'——',def:"——"},
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
        {name:"change",red:'日期选中事件',attr:'(value:value)',exm:'change = (e) =>{console.log(e)}'},
        {name:"clear",red:'清空事件',attr:'()',exm:'clear = () =>{console.log("清空")}'},
        {name:"open",red:'日期面板打开事件',attr:'()',exm:'open = () =>{console.log("打开")}'},
        {name:"close",red:'日期面板关闭事件',attr:'()',exm:'close = () =>{console.log("关闭")}'}
      ]
    }
  })
  const {options1,options2,options3} = state
</script>

<style>
</style>
