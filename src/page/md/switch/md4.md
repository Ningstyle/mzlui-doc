<br/>

```html
<!-- html -->
<m-switch v-model="switchVal" closeText="关闭" activeText="开启"></m-switch>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  const switchVal = ref(true)
</script>
```
<br/>

## 自定义颜色
#### 可通过 <font color=#0e80eb>**closeColor**</font> 和 <font color=#0e80eb>**activeColor**</font> 属性自定义关闭和开启时的背景颜色。
<br/>