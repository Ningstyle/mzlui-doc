<br/>

```html
<!-- html -->
<m-tree :options="treeOptions" :defaultOpenNodes="['0-2','2-2']"></m-tree>
```
<br/>

```javascript
/*js*/
<script setup>
  import { reactive } from 'vue';
  const state = reactive({
    treeOptions:"JSON数据请点击查看：https://codepen.io/ningstyle/pen/Vwyadzp"
  })
  const { treeOptions } = state
</script>
```
<br/>

## 可选择
#### 通过 <font color=#0e80eb>**multiple**</font> 属性启用可选择的树。
<br/>