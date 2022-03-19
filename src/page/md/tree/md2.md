<br/>

```html
<!-- html -->
<m-tree :options="treeOptions"></m-tree>
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

## 默认展开
#### 通过 <font color=#0e80eb>**defaultOpenNodes**</font> 属性设置默认展开的节点。
<br/>