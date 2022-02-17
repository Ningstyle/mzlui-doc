---
version: 0.2.0
---
<br/>

### 组件代码 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/demo/demo.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:18px;color:#0e80eb"></i></a>
```html
<!--按钮-->
<m-button rightIcon="m-icon-add-circle">添加</m-button>
<m-button type="primary" round leftIcon="m-icon-loading2" localing>加载中</m-button>
<m-button type="warning" round leftIcon="m-icon-upload">上传</m-button>

<!--输入框-->
<m-input v-model="value1"  leftIcon="m-icon-search" clearable></m-input>

<!--表格-->
<m-table :options="options" size="small">
  <template #action>
    <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
    <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
  </template>
</m-table>
```
<br/>

```javascript
/*js*/
<script> setup>
  import {ref, reactive} from 'vue';
  const value1 = ref('');
  const state = reactive({
    options:{
      fileds:[
        {field:'name',title:'姓名',align:'center'},
        {field:'job',title:'职业'},
        {field:'address',title:'地址'},
        {field:'from',title:'籍贯'},
        {field:'action',title:'操作',width:'200px',align:'center'}
      ],
      datas:[
        {name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
        {name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
        {name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
        {name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
      ]
    }
  });
  const {options} = state;
</script>
```