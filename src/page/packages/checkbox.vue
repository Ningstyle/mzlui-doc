<template>
  <div v-highlight>
    <rd1-md></rd1-md>
  </div>
  <m-checkbox v-model="checkboxVal1" :options="checkOptions" @change="checkChange"></m-checkbox>
  <div v-highlight>
    <rd2-md></rd2-md>
  </div>
  <m-checkbox v-model="checkboxVal2" :options="checkOptions1" @change="checkChange"></m-checkbox>
  <div v-highlight>
    <rd8-md></rd8-md>
  </div>
  <m-checkbox v-model="checkboxVal3" :options="checkOptions2" @change="checkChange"></m-checkbox>
  <div v-highlight>
    <rd3-md></rd3-md>
  </div>
  <m-checkbox v-model="checkboxVal4" :options="checkOptions" :inline="false"></m-checkbox>
  <div v-highlight>
    <rd4-md></rd4-md>
  </div>
  <m-checkbox v-model="checkboxVal5" :options="checkOptions3"  labelFiled="name" valueFiled="id"></m-checkbox>
  <div v-highlight>
    <rd5-md></rd5-md>
  </div>
  <m-checkbox v-model="checkboxVal6" :options="checkOptions4" @change="checkChange"></m-checkbox>
  <m-checkbox v-model="checkboxVal7" :options="checkOptions4" @change="checkChange" size="small"></m-checkbox>
  <m-checkbox v-model="checkboxVal8" :options="checkOptions4" @change="checkChange" size="mini"></m-checkbox>
  <div v-highlight>
    <rd6-md></rd6-md>
  </div>
  <m-checkbox v-model="checkboxVal9" :options="checkOptions5" customColor="#09b63d"></m-checkbox>
  <m-checkbox v-model="checkboxVal10" :options="checkOptions5" customColor="#25B0F8"></m-checkbox>
  <div v-highlight>
    <rd7-md></rd7-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">options API</p>
  <span class="titlespan">下拉框数据配置</span>
  <m-table :options="options2"></m-table>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options3"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { VueComponent as rd1Md } from '@/page/md/checkbox/rd1.md';
  import { VueComponent as rd2Md } from '@/page/md/checkbox/rd2.md';
  import { VueComponent as rd3Md } from '@/page/md/checkbox/rd3.md';
  import { VueComponent as rd4Md } from '@/page/md/checkbox/rd4.md';
  import { VueComponent as rd5Md } from '@/page/md/checkbox/rd5.md';
  import { VueComponent as rd6Md } from '@/page/md/checkbox/rd6.md';
  import { VueComponent as rd7Md } from '@/page/md/checkbox/rd7.md';
  import { VueComponent as rd8Md } from '@/page/md/checkbox/rd8.md';
  import {reactive,ref} from 'vue'
  const checkboxVal1 = ref([''])
  const checkboxVal2 = ref(['zhongguo','deguo'])
  const checkboxVal3 = ref([])
  const checkboxVal4 = ref([])
  const checkboxVal5 = ref([0,2])
  const checkboxVal6 = ref([])
  const checkboxVal7 = ref([])
  const checkboxVal8 = ref([])
  const checkboxVal9 = ref(['zhongguo','yingguo'])
  const checkboxVal10 = ref(['zhongguo','yingguo'])
  const state = reactive({
    checkOptions:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo"}
    ],
    checkOptions1:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo"}
    ],
    checkOptions2:[
      {'label':"中国","value":"zhongguo","disabled":true},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo","disabled":true},
      {'label':"法国","value":"faguo"}
    ],
    checkOptions3:[
      {'name':"小明","id":0},
      {'name':"小李","id":1},
      {'name':"小红","id":2},
      {'name':"小王","id":3,}
    ],
    checkOptions4:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo"}
    ],
    checkOptions5:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo","disabled":true},
      {'label':"法国","value":"faguo"}
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
        {attr:'v-model',type:'Array',red:'多选绑定值',sel:'——',def:"——"},
        {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
        {attr:'options',type:'Array',red:'多选数据配置，具体见下方 options API',sel:'——',def:"[]"},
        {attr:'inline',type:'Boolean',red:'是否为行内元素',sel:'true / false',def:"true"},
        {attr:'labelFiled',type:'String',red:'自定义替换lable的字段名',sel:'——',def:"label"},
        {attr:'valueFiled',type:'String',red:'自定义替换value的字段名',sel:'——',def:"value"},
        {attr:'customColor',type:'String',red:'自定义选中颜色色值',sel:'——',def:"——"},
        {attr:'customClass',type:'String',red:'自定义组件类名',sel:'——',def:"——"},
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
        {attr:'label',type:'String',red:'多选默认label展示字段名，自定义请使用 labelFiled 属性重新关联lable字段',sel:'——',def:"label"},
        {attr:'value',type:'String',red:'多选默认value选中值，自定义请使用 valueFiled 属性重新关联value字段',sel:'——',def:"value"},
        {attr:'disabled',type:'Boolean',red:'是否禁用选项',sel:'true / false',def:"false"}
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
        {name:"change",red:'选中事件',attr:'(value:e)',exm:'change = (e) =>{console.log(e.value,e.index)}'},
      ]
    }
  })
  const checkChange = (e) =>{
    console.log(e.value,e.index);
  }
  const {checkOptions,checkOptions1,checkOptions2,checkOptions3,checkOptions4,checkOptions5,options1,options2,options3} = state
</script>

<style lang="scss" scoped>
</style>
