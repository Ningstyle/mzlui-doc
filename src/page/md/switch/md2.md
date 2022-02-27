<br/>

```html
<!-- html -->
<m-switch v-model="switchVal" @change="switchChange"></m-switch>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  const switchVal = ref(false)
  const switchChange = (e) =>{
    console.log(e);
  }
</script>
```
<br/>

## 禁用状态
#### 可通过 <font color=#0e80eb>**disabled**</font> 属性开启。
<br/>