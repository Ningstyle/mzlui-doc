<template>
  <div v-highlight>
    <md1-md></md1-md>
  </div>
  <div class="layoutBox">
    <m-row>
      <m-col :span="12"><div class="col-box-2 col-box">12</div></m-col>
      <m-col :span="12"><div class="col-box-1 col-box">12</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
      <m-col :span="8"><div class="col-box-2 col-box">8</div></m-col>
      <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
      <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
      <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
      <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="4"><div class="col-box-1 col-box">4</div></m-col>
      <m-col :span="2"><div class="col-box-2 col-box">2</div></m-col>
      <m-col :span="4"><div class="col-box-1 col-box">4</div></m-col>
      <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
      <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
    </m-row>
  </div>
  <div v-highlight>
    <md2-md></md2-md>
  </div>
  <div class="layoutBox">
    <m-row>
      <m-col :span="10"><div class="col-box-2 col-box">10</div></m-col>
      <m-col :span="12" :offset="2"><div class="col-box-1 col-box">12</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
      <m-col :span="8" :offset="8"><div class="col-box-1 col-box">8</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="2"><div class="col-box-2 col-box">2</div></m-col>
      <m-col :span="6" :offset="4"><div class="col-box-1 col-box">6</div></m-col>
      <m-col :span="6" :offset="6"><div class="col-box-2 col-box">6</div></m-col>
    </m-row>
    <m-row>
      <m-col :span="4"><div class="col-box-1 col-box">4</div></m-col>
      <m-col :span="2" :offset="4"><div class="col-box-2 col-box">2</div></m-col>
      <m-col :span="4" :offset="2"><div class="col-box-1 col-box">4</div></m-col>
      <m-col :span="6" :offset="2"><div class="col-box-2 col-box">6</div></m-col>
    </m-row>
  </div>
  <div v-highlight>
    <md3-md></md3-md>
  </div>
  <m-table :options="options" size="small"></m-table>
  <div style="margin-bottom:30px"></div>
</template>

<script setup>
  import { ref,reactive } from "vue";
  import { VueComponent as md1Md } from '@/page/md/layout/md1.md';
  import { VueComponent as md2Md } from '@/page/md/layout/md2.md';
  import { VueComponent as md3Md } from '@/page/md/layout/md3.md';
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
        {attr:'span',type:'number',red:'每行占用列数',sel:'——',def:"24"},
        {attr:'offset',type:'number',red:'偏移指定列数',sel:'——',def:"——"}
      ]
    }
  })
  const { options } = state
</script>

<style lang="scss" scoped>
  
.layoutBox{
  width: 100%;
  height: auto;
  overflow: hidden;
  border:1px solid #eee;
  border-radius: 4px;
  padding:25px 15px 15px 15px;
  .col-box{
    height:34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1{
    background-color: #9eaaaf;
    color:#333
  }
  .col-box-2{
    background-color: #505050;
    color:#fff
  }
}
</style>