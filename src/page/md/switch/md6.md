<br />

```html
<!-- html -->
<m-switch v-model="switchVal" disabled></m-switch>
```
<br />

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  const switchVal = ref(true)

</script>
```
<br />

## 带提示信息
#### 可通过 <font color=#0e80eb>**showTipsText**</font> 属性开启。
<br />
