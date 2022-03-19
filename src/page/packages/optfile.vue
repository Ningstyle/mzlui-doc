<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <m-optfile label="选择文件" type="primary" showFileList></m-optfile>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <m-optfile showFileList targetType="box" accept=".png,.jpg" multiple></m-optfile>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-optfile
    label="将文件拖拽到此处或点击选择文件"
    showFileList
    targetType="box"
    multiple
    size="big"
    drop
    icon="m-icon-shangchuan">
  </m-optfile>
  <div v-highlight>
    <md4-md></md4-md>
  </div>
  <m-optfile
    label="选择文件"
    imgListShow
    targetType="box"
    multiple
    drop
    accept=".png,.jpg,.gif,.jpeg"
    icon="m-icon-shangchuan">
  </m-optfile>
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
  import { reactive } from 'vue';
  import { VueComponent as md1Md } from '@/page/md/optfile/md1.md';
  import { VueComponent as md2Md } from '@/page/md/optfile/md2.md';
  import { VueComponent as md3Md } from '@/page/md/optfile/md3.md';
  import { VueComponent as md4Md } from '@/page/md/optfile/md4.md';
  import { VueComponent as md5Md } from '@/page/md/optfile/md5.md';
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
        {attr:'label',type:'String',red:'提示文字信息',sel:'——',def:"——"},
        {attr:'targetType',type:'String',red:'组件展现方式',sel:'btn / box',def:"btn"},
        {attr:'type',type:'String',red:'按钮类型的type，支持button的type的类型，custom除外',sel:'default / primary / success / danger / warning / dashed / text',def:"default"},
        {attr:'size',type:'String',red:'盒子类型时组件大小，targetType为box时有效',sel:'big',def:"——"},
        {attr:'accept',type:'String',red:'接受的文件类型',sel:'参考原生input=file的accept属性',def:"——"},
        {attr:'multiple',type:'Boolean',red:'是否启用多选',sel:'true / false',def:"false"},
        {attr:'icon',type:'String',red:'自定义图标',sel:'参考图标库',def:"m-icon-add-bold"},
        {attr:'showFileList',type:'Boolean',red:'是否显示文件上传列表',sel:'true / false',def:"false"},
        {attr:'fileList',type:'Array',red:'文件上传列表，例：[{name:1.png},{name:2.png}]，imgListShow为false时有效',sel:'——',def:"[]"},
        {attr:'drop',type:'Boolean',red:'是否启用拖拽功能',sel:'true / false',def:"false"},
        {attr:'imgListShow',type:'Boolean',red:'是否预览已上传图片，targetType为box且showFileList为false时有效',sel:'true / false',def:"false"},
        {attr:'customClass',type:'String',red:'自定义组件类名',sel:'——',def:"——"},
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
        {name:"beforeChange",red:'文件选择之前',attr:'()',exm:'beforeChange = () =>{console.log("之前")}'},
        {name:"change",red:'文件选择之之后',attr:'(value:files)',exm:'change = (files) =>{console.log(files)}'}
      ]
    }
  })
  const {options1,options2} = state
</script>

<style>
</style>
