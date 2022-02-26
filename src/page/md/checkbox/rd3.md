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
      {'label':"中国","value":"zhongguo","disabled":true},
      {'label':"英国","value":"yingguo"},
      {'label':"德国","value":"deguo","disabled":true},
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

## 垂直排列
#### 可以通过设置 <font color=#0e80eb>**inline**</font> 属性为 <font color=#0e80eb>**false**</font> 实现垂直排列。
<br/>