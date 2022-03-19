<br/>

```html
<!-- html -->
<m-date 
  v-model="dateVal"
  @change="dateChange"
  placeholder="请选择日期">
</m-date>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  const dateVal = ref("")
  const dateChange = (e) => {
    console.log(e);
  }
</script>
```
<br/>

## 禁用状态
#### 通过 <font color=#0e80eb>**disabled**</font> 属性开启禁用。