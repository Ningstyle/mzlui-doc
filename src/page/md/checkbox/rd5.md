<br/>

```html
<!-- html -->
<m-checkbox v-model="checkboxVal" :options="checkOptions"  labelFiled="name" valueFiled="id"></m-checkbox>
```
<br/>

```javascript
/*js*/
<script setup>
  import {reactive,ref} from 'vue'
  const checkboxVal = ref([0,2])
  const state = reactive({
    checkOptions:[
      {'name':"小明","id":0},
      {'name':"小李","id":1},
      {'name':"小红","id":2},
      {'name':"小王","id":3,}
    ]
  })
  const {checkOptions} = state
</script>
```
<br/>

## 不同大小
#### 可以通过设置 <font color=#0e80eb>**size**</font> 属性来显示不同大小。
<br/>