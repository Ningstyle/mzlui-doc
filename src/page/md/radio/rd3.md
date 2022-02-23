<br/>

```html
<!-- html -->
<m-radio v-model="radioVal" :options="radioOptions" @change="radioChange"></m-radio>
```
<br/>

```javascript
/*js*/
<script setup>
  import {reactive,ref} from 'vue'
  const radioVal = ref('zhongguo')
  const state = reactive({
    radioOptions:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo","disabled":true},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo","disabled":true}
    ]
  })
  const radioChange = (e)=>{
    console.log(e.value,e.index);
  }
  const {radioOptions} = state
</script>
```
<br/>

## 垂直排列
#### 可以通过设置 <font color=#0e80eb>**inline**</font> 属性为 <font color=#0e80eb>**false**</font> 实现垂直排列。
<br/>