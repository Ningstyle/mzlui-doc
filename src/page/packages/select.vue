<template>
	<div v-highlight>
	  <select1-md></select1-md>
	</div>
  <div style="width: 400px;">
		<m-select
		  v-model="selVal" 
		  placeholder="请选择" 
		  :options="selOptions" 
		  @change="selchange">
		</m-select>
	</div>
	<div v-highlight>
	  <select2-md></select2-md>
	</div>
  <div style="width: 400px;">
  	<m-select
  	  v-model="selVal1" 
  	  placeholder="请选择" 
  	  :options="selOptions"
      disabled>
  	</m-select>
  </div>
  <div v-highlight>
    <select3-md></select3-md>
  </div>
  <div style="width: 400px;">
  	<m-select
  	  v-model="selVal1" 
  	  placeholder="请选择" 
  	  :options="selOptions1" >
  	</m-select>
  </div>
  <div v-highlight>
    <select4-md></select4-md>
  </div>
  <div style="width: 400px;">
  	<m-select
  	  v-model="selVal2" 
  	  placeholder="请选择"
  	  :options="selOptions2"
      labelFiled="cityName"
      valueFiled="cityCode"
      @change="selchange1">
  	</m-select>
  </div>
  <div v-highlight>
    <select5-md></select5-md>
  </div>
  <div>
    <span style="width: 300px;display: inline-block;margin-right:20px">
      <m-select
        v-model="selVal1" 
        placeholder="默认大小" 
        :options="selOptions">
      </m-select>
    </span>
    <span style="width: 300px;display: inline-block;margin-right:20px">
      <m-select
        v-model="selVal1" 
        placeholder="小一点的" 
        :options="selOptions"
        size="small">
      </m-select>
    </span>
    <span style="width: 300px;display: inline-block;">
      <m-select
        v-model="selVal1" 
        placeholder="mini型的" 
        :options="selOptions"
        size="mini">
      </m-select>
    </span>
  </div>
  <div v-highlight>
    <select6-md></select6-md>
  </div>
  <div style="width: 400px;">
  	<m-select 
      v-model="selVal3" 
      placeholder="可搜索" 
      :options="selOptions3" 
      searchable>
    </m-select>
  </div>
  <div v-highlight>
    <select7-md></select7-md>
  </div>
  <div style="width: 400px;">
  	<m-select
  	  v-model="selVal1" 
  	  placeholder="请选择" 
  	  :options="selOptions"
      @change="selchange2"
      multiple>
  	</m-select>
  </div>
  <p>正在完善......</p>
  <div v-highlight>
    <select8-md></select8-md>
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
</template>

<script setup>
import {reactive, ref} from 'vue'
import { VueComponent as select1Md } from '@/page/md/select/select1.md';
import { VueComponent as select2Md } from '@/page/md/select/select2.md';
import { VueComponent as select3Md } from '@/page/md/select/select3.md';
import { VueComponent as select4Md } from '@/page/md/select/select4.md';
import { VueComponent as select5Md } from '@/page/md/select/select5.md';
import { VueComponent as select6Md } from '@/page/md/select/select6.md';
import { VueComponent as select7Md } from '@/page/md/select/select7.md';
import { VueComponent as select8Md } from '@/page/md/select/select8.md';
const selVal = ref('bajisitan')
const selVal1 = ref('')
const selVal2 = ref('132')
const selVal3 = ref('')
const state = reactive({
  selOptions:[
    {label:'中国',value:'zhongguo'},
    {label:'俄罗斯',value:'eluosi'},
    {label:'美国',value:'meiguo'},
    {label:'澳大利亚',value:'aodaliya'},
    {label:'巴基斯坦',value:'bajisitan'}
  ],
  selOptions1:[
    {label:'中国',value:'zhongguo'},
    {label:'俄罗斯',value:'eluosi',disabled:true},
    {label:'美国',value:'meiguo'},
    {label:'澳大利亚',value:'aodaliya',disabled:true},
    {label:'巴基斯坦',value:'bajisitan'}
  ],
  selOptions2:[
    {cityName:'北京',cityCode:'131'},
    {cityName:'天津',cityCode:'332'},
    {cityName:'上海',cityCode:'289'},
    {cityName:'重庆',cityCode:'132',disabled:true},
    {cityName:'深圳',cityCode:'340'}
  ],
  selOptions3:[
    {label:'中国',value:"1"},
    {label:'Node',value:"Node"},
    {label:'CSS',value:"CSS"},
    {label:'javascript',value:"javascript"},
    {label:'mzl-ui',value:"mzl-ui"},
    {label:'mzl-vi',value:"mzl-vi"},
    {label:'Npm',value:"Npm"},
    {label:'HTML',value:"HTML",disabled:true},
    {label:'java',value:"java"},
    {label:'XML',value:"XML"},
    {label:'mzl-ci',value:"mzl-ci"}
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
      {attr:'v-model',type:'String || Array',red:'下拉框绑定值，开启多选时类型为Array',sel:'——',def:"——"},
      {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
      {attr:'placeholder',type:'String',red:'下拉框占位字符',sel:'——',def:"——"},
      {attr:'options',type:'Object',red:'下拉框数据配置，具体见下方 options API',sel:'——',def:"[]"},
      {attr:'disabled',type:'Boolean',red:'是否为禁用状态',sel:'true / false',def:"false"},
      {attr:'searchable',type:'Boolean',red:'是否开启过滤搜索',sel:'true / false',def:"false"},
      {attr:'multiple',type:'Boolean',red:'是否开启多选',sel:'true / false',def:"false"},
      {attr:'labelFiled',type:'Boolean',red:'自定义替换lable的字段名',sel:'——',def:"label"},
      {attr:'valueFiled',type:'Boolean',red:'自定义替换value的字段名',sel:'——',def:"value"}
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
      {attr:'label',type:'String',red:'下拉框默认label展示名称，自定义请使用 labelFiled 属性重新关联lable字段',sel:'——',def:"label"},
      {attr:'value',type:'String',red:'下拉框默认value选中值，自定义请使用 valueFiled 属性重新关联value字段',sel:'——',def:"value"},
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
      {name:"change",red:'下拉框选中事件',attr:'(value: item,index)',exm:'change = (item,index) =>{console.log(item,index)}'},
    ]
  }
})
const selchange = (item,index) =>{
	console.log(selVal.value);
	// console.log(item,index);
}
const selchange1 = (item,index) =>{
	console.log(item,index);
}
const selchange2 = (item,index) =>{
	console.log(item,index);
}
const {selOptions,selOptions1,selOptions2,selOptions3,options1,options2,options3} = state
</script>

<style lang="scss" scoped>

</style>