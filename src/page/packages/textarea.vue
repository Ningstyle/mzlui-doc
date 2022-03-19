<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-textarea v-model="textareaVal1" placeholder="请输入内容" @input="textareaInpt"></m-textarea>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-textarea v-model="textareaVal2" placeholder="请输入内容" disabled></m-textarea>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-textarea v-model="textareaVal3" placeholder="请输入内容" :maxlength="100"></m-textarea>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-textarea v-model="textareaVal4" placeholder="请输入内容" focusColor="#ec3437"></m-textarea>
  <div v-highlight>
    <md5-md></md5-md>
  </div>
  <m-table :options="options" size="small"></m-table>
  <br/>
  <br/>
  <p class="titlep">Events</p>
  <span class="titlespan">事件列表</span>
  <m-table :options="options1" size="small"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { ref,reactive } from "vue";
  import { VueComponent as md1Md } from '@/page/md/textarea/md1.md';
  import { VueComponent as md2Md } from '@/page/md/textarea/md2.md';
  import { VueComponent as md3Md } from '@/page/md/textarea/md3.md';
  import { VueComponent as md4Md } from '@/page/md/textarea/md4.md';
  import { VueComponent as md5Md } from '@/page/md/textarea/md5.md';
  const textareaVal1 = ref("")
  const textareaVal2 = ref("")
  const textareaVal3 = ref("")
  const textareaVal4 = ref("")
  const textareaInpt = (e) => {
    console.log(e);
  }
  const state = reactive({
    options:{
     fileds:[
        {field:'attr',title:'参数',align:'center'},
        {field:'type',title:'类型',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'sel',title:'可选值',align:'center'},
        {field:'def',title:'默认值',align:'center'}
      ],
      datas:[
        {attr:'v-model',type:'string / number',red:'textarea文本域绑定值',sel:'——',def:"——"},
        {attr:'placeholder',type:'string',red:'输入框占位字符',sel:'——',def:"——"},
        {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
        {attr:'form',type:'String',red:'原生属性，所属表单',sel:'——',def:"——"},
        {attr:'resize',type:'Boolean',red:'是否开启拉伸',sel:'true / false',def:"true"},
        {attr:'rows',type:'Number',red:'textarea可见区域高度',sel:'——',def:"4"},
        {attr:'cols',type:'Number',red:'textarea可见区域宽度',sel:'——',def:"50"},
        {attr:'readonly',type:'Boolean',red:'原生属性，是否只读',sel:'true / false',def:"false"},
        {attr:'maxlength',type:'Number',red:'文本区域的最大字符数',sel:'——',def:"——"},
        {attr:'focusColor',type:'String',red:'自定义Focus颜色的色值',sel:'——',def:"——"},
        {attr:'customClass',type:'String',red:'自定义组件整体类名',sel:'——',def:"——"}
      ]
    },
    options1:{
     fileds:[
        {field:'name',title:'事件名',align:'center'},
        {field:'red',title:'说明',align:'center',width:'350px'},
        {field:'attr',title:'回调参数',align:'center'},
        {field:'exm',title:'示例',align:'center',width:'350px'}
      ],
      datas:[
        {name:"focus",red:'textarea文本域在获取焦点时触发',attr:'(event: Event)',exm:'focus=(e)=>{console.log(e)}'},
        {name:"blur",red:'textarea文本域在失去焦点时触发',attr:'(event: Event)',exm:'blur=(e)=>{console.log(e)}'},
        {name:"input",red:'textarea文本域值变化时触发',attr:'(value: string | number)',exm:'input=(e)=>{console.log(e)}'}
      ]
    },
  })
  const { options,options1 } = state
</script>

<style>
</style>
