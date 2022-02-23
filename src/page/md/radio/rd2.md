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
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo"}
    ]
  })
  const radioChange = (e)=>{
    console.log(e.value,e.index);
  }
  const {radioOptions} = state
</script>
```
<br/>

## 禁用选项
#### 可以针对 <font color=#0e80eb>**options**</font> 下某个选项来添加 <font color=#0e80eb>**disabled**</font> 属性实现禁用选项。
<br/>