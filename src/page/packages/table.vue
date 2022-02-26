<template>
  <div v-highlight>
    <one-md></one-md>
  </div>
  <m-table :options="options"></m-table>
  <div v-highlight>
    <onecode-md></onecode-md>
  </div>
  <p class="titlep">不同大小</p>
  <span class="titlespan">你可以传入一个 <b>size</b> 来确定表格的不同大小，以适配不同的应用场景</span>
  <br/>
  <span class="titlespan">小的</span>
  <m-table :options="options" size="small"></m-table>
  <br/>
  <span class="titlespan">更小的</span>
  <m-table :options="options" size="mini"></m-table>
  <br/>
  <div v-highlight>
    <two-md></two-md>
  </div>
  <div v-highlight>
    <three-md></three-md>
  </div>
  <m-table :options="options3">
		<template #head-job="item">
			<m-dropdown :title="item.scope.title" :options="dorpoptions" @change="dropchange" size="mini"></m-dropdown>
		</template>
    <template #id="item">
      <div style="color:#008dff">{{item.scope.row.id}}</div>
    </template>
    <template #action="item">
      <m-button type="text" leftIcon="m-icon-edit" size="small" :disabled="item.scope.rowIndex%2==0">编辑</m-button>
      <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
    </template>
  </m-table>
  <div v-highlight>
    <threecode-md></threecode-md>
  </div>
  <br/>
  <p class="titlep">自定义表头及表格样式</p>
  <span class="titlespan">使用 <b>headStyle</b> 自定义表头的样式，使用 <b>rowStyle</b> 自定义表格内容区域的样式</span>
  <br/>
  <br/>
  <m-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle " size="mini"></m-table>
  <div v-highlight>
    <custom-md></custom-md>
  </div>
  <div v-highlight>
    <attr-md></attr-md>
  </div>
  <m-table :options="options1"></m-table>
  <br/>
  <p class="titlep">fileds API</p>
  <span class="titlespan">约束表头及表格内容的配置</span>
  <m-table :options="options2"></m-table>
	<div style="margin-bottom:30px"></div>
</template>

<script setup>
import { VueComponent as oneMd } from '@/page/md/table/one.md'
import { VueComponent as onecodeMd } from '@/page/md/table/onecode.md'
import { VueComponent as twoMd } from '@/page/md/table/two.md'
import { VueComponent as threeMd } from '@/page/md/table/three.md'
import { VueComponent as threecodeMd } from '@/page/md/table/threeCode.md'
import { VueComponent as attrMd } from '@/page/md/table/attr.md'
import { VueComponent as customMd } from '@/page/md/table/custom.md'
import { reactive,ref } from '@vue/reactivity'
const state = reactive({
  options:{
    fileds:[
      {
        field:'id',
        title:'ID',
        align:'center'
      },
      {
        field:'name',
        title:'姓名',
        align:'center'
      },
      {
        field:'job',
        title:'职业',
        align:'center'
      },
      {
        field:'address',
        title:'地址',
        align:'center'
      },
      {
        field:'from',
        title:'籍贯',
        align:'center'
      },
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  },
  options3:{
    fileds:[
      {
        field:'id',
        title:'ID',
        align:'center'
      },
      {
        field:'name',
        title:'姓名',
        align:'center'
      },
      {
        field:'job',
        title:'职业',
        align:'center'
      },
      {
        field:'address',
        title:'地址',
        align:'center'
      },
      {
        field:'from',
        title:'籍贯',
        align:'center'
      },
      {
        field:'action',
        title:'操作',
        width:'200px',
        align:'center'
      }
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  },
  options1:{
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
      {attr:'options',type:'Object',red:'表格数据,fileds 和 datas,fileds作为整体约束（具体见下方API），datas作为数据定义',sel:'——',def:"{fileds:[], datas:[]}"},
      {attr:'size',type:'String',red:'表格尺寸大小',sel:'default / small / mini',def:"default"},
      {attr:'showHeader',type:'Boolean',red:'是否显示表头',sel:'true / false',def:"true"},
      {attr:'headStyle',type:'Object',red:'自定义表头样式',sel:'——',def:"——"},
      {attr:'rowStyle',type:'Object',red:'自定义表格内容区域的样式',sel:'——',def:"——"},
      {attr:'customClass',type:'String',red:'自定义表格组件整体的Class类名',sel:'——',def:"——"}
    ]
  },
  options2:{
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
        align:'center',
      }
    ],
    datas:[
      {attr:'field',type:'String',red:'（固定）定义表格列的参数名，对应datas数据下某项的键名',sel:'——',def:"——"},
      {attr:'title',type:'String',red:'（固定）定义表头显示的名称',sel:'——',def:"——"},
      {attr:'align',type:'String',red:'定义表格内容展示位置',sel:'left / center / right',def:"left"},
      {attr:'width',type:'String',red:'定义表格列的宽度,支持任意浏览器支持的单位(vw,%,px)',sel:'——',def:"——"},
    ]
  },
	dorpoptions:[
		{label:"放羊娃",icon:'m-icon-file'},
		{label:"徒弟",icon:'m-icon-keyboard-9'},
		{label:"农民",icon:'m-icon-link'},
		{label:"妖精",icon:'m-icon-file'}
	],
  headStyle:{
    color:"#fff",
    borderColor:"#4c94d1",
    backgroundColor:"rgba(25,66,120,.9)"
  },
  rowStyle:{
    borderColor:"#4c94d1",
  }
})
const dropchange = (item,index) =>{
	console.log(item,index);
}
const {options,options1,options2,options3,headStyle,rowStyle,dorpoptions} = state
</script>

<style lang="scss" scoped>

</style>