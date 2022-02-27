<br/>

```html
<!-- html -->
<m-switch v-model="switchVal" :showTipsText="true"></m-switch>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  const switchVal = ref(false)
</script>
```
<br/>

## 带辅助文字
#### 可通过 <font color=#0e80eb>**closeText**</font> 和 <font color=#0e80eb>**activeText**</font> 属性决定开启和关闭状态时的辅助文字，通过 <font color=#0e80eb>**textAlign**</font> 属性决定辅助文字的位置。
<br/>