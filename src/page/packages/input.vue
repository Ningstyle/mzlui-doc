<template>
  <div v-highlight>
    <input-md></input-md>
  </div>
  <div style="width:350px;margin-bottom:1vh">
    <m-input v-model="value1"  leftIcon="m-icon-search"></m-input>
  </div>
  <div style="width:350px">
    <m-input v-model="value2" rightIcon="m-icon-calendar"></m-input>
  </div>
  <div v-highlight>
    <inputcode-md></inputcode-md>
  </div>
  <div style="width:350px;margin-bottom:1vh">
    <m-input v-model="value1" type="text" placeholder="自定义你喜欢的focus颜色" focusColor="red"></m-input>
  </div>
  <div v-highlight>
    <inputcode1-md></inputcode1-md>
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
import { VueComponent as inputMd } from '@/page/md/input/input.md'
import { VueComponent as inputcodeMd } from '@/page/md/input/inputcode.md'
import { VueComponent as inputcode1Md } from '@/page/md/input/inputcode1.md'
import { reactive, ref } from "vue";
const value1 = ref('')
const state = reactive({
  options:{
   fileds:[
      {
        field:'attr',
        title:'参数',
        align:'center'
      },
      {
        field:'type',
        title:'类型',
        align:'center'
      },
      {
        field:'red',
        title:'说明',
        align:'center',
        width:'350px'
      },
      {
        field:'sel',
        title:'可选值',
        align:'center'
      },
      {
        field:'def',
        title:'默认值',
        align:'center'
      }
    ],
    datas:[
      {attr:'v-model',type:'string / number',red:'input绑定值',sel:'——',def:"——"},
      {attr:'type',type:'string',red:'支持所有原生type值',sel:'——',def:"——"},
      {attr:'placeholder',type:'string',red:'输入框占位字符',sel:'——',def:"——"},
      {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
      {attr:'clearable',type:'Boolean',red:'是否可清空',sel:'true / false',def:"false"},
      {attr:'showPassword',type:'Boolean',red:'是否显示密码查看图标，需配合type为password类型一起使用',sel:'true / false',def:"false"},
      {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
      {attr:'leftIcon / rightIcon',type:'String',red:'是否带图标，并确定图标的位置',sel:'参考图标库',def:"——"},
      {attr:'autofocus',type:'Boolean',red:'是否自动获取输入框焦点',sel:'true / false',def:"false"},
      {attr:'focusColor',type:'String',red:'自定义Focus颜色的色值',sel:'——',def:"——"}
    ]
  },
  options1:{
   fileds:[
      {
        field:'name',
        title:'事件名',
        align:'center'
      },
      {
        field:'red',
        title:'说明',
        align:'center',
        width:'350px'
      },
      {
        field:'attr',
        title:'回调参数',
        align:'center'
      },
      {
        field:'exm',
        title:'示例',
        align:'center',
        width:'350px'
      }
    ],
    datas:[
      {name:"focus",red:'input在获取焦点时触发',attr:'(event: Event)',exm:'focus=(e)=>{console.log(e.target.value)}'},
      {name:"blur",red:'input在失去焦点时触发',attr:'(event: Event)',exm:'blur=(e)=>{console.log(e.target.value)}'},
      {name:"input",red:'input值变化时触发',attr:'(value: string | number)',exm:'input=(e)=>{console.log(e)}'},
      {name:"change",red:'用户获得焦点并按下回车时触发',attr:'(event: Event)',exm:'change=(e)=>{console.log(e.target.value)}'},
      {name:"clear",red:'可清空的input点击清空按钮时触发',attr:'——',exm:'——'},
    ]
  },
})
const { options,options1 } = state
</script>

<style lang="scss" scoped>

</style>