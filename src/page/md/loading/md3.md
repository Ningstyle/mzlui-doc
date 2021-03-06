<br/>

```html
<!-- html -->
<m-button @click="openLoading">点击加载</m-button>
<div id="loadingTextBox">
  <m-table :options="options" size="small">
    <template #action>
      <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
      <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
    </template>
  </m-table>
</div>
```
<br/>

```javascript
/*js*/
<script setup>
  import { reactive } from 'vue';
  import {Loading} from 'mzl-ui'
  const openLoading = () => {
    Loading.show({
      target:"#loadingTextBox"
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
  const state = reactive({
    options:{
      fileds:[
        {"field":'name',"title":'姓名',"align":'center'},
        {"field":'job',"title":'职业'},
        {"field":'address',"title":'地址'},
        {"field":'from',"title":'籍贯'},
        {"field":'action',"title":'操作',"width":'200px',"align":'center'}
      ],
      datas:[
        {"name":'王小二',"job":'放羊娃',"address":'在那遥远的小山村',"from":"民间流传故事"},
        {"name":'猪八戒',"job":'徒弟',"address":'高老庄',"from":"西游记神话故事"},
        {"name":'刘老四',"job":'农民',"address":'可能在中国',"from":"想象出来的"},
        {"name":'白骨精',"job":'妖精',"address":'西游记',"from":"西游记神话故事"},
      ]
    }
  })
  const {options} = state
</script>
```
<br/>

```css
// css
<style lang="scss" scoped>
  #loadingTextBox{
    width:100%;
    height:auto;
    margin-top:1vh;
    border:1px solid #f0f0f0;
    background-color: #fff;
  }
</style>
```
<br/>

## 自定义加载图片
#### 可通过设置 <font color=#0e80eb>**img**</font> 来自定义加载图片，自定义后 <font color=#0e80eb>**icon**</font> 将失效。
<br/>
