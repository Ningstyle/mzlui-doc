<br/>

```html
<!-- html -->
<m-checkbox v-model="checkboxVal" :options="checkOptions" @change="checkChange"></m-checkbox>
```
<br/>

```javascript
/*js*/
<script setup>
  import {reactive,ref} from 'vue'
  const checkboxVal = ref(['zhongguo','deguo'])
  const state = reactive({
    checkOptions:[
      {'label':"中国","value":"zhongguo"},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo"},
      {'label':"法国","value":"faguo"}
    ]
  })
  const checkChange = (e) =>{
    console.log(e.value,e.index);
  }
  const {checkOptions} = state
</script>
```
<br/>

## 禁用选项
#### 可以针对 <font color=#0e80eb>**options**</font> 下某个选项来添加 <font color=#0e80eb>**disabled**</font> 属性实现禁用选项。
<br/>