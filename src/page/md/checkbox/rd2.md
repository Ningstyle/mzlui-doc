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
  const checkboxVal = ref([])
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

## 默认选中
####  <font color=#0e80eb>**v-model**</font> 添加默认绑定选项 <font color=#0e80eb>**value**</font>值。
<br/>