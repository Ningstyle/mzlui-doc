<br/>

```html
<!-- html -->
<m-tree :options="treeOptions" multiple :defaultSelectNodes="['0-1','0-2-1-0']"></m-tree>
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

## 禁用状态
#### 通过对数据项增加 <font color=#0e80eb>**disabled:true**</font> 来设置禁用指定节点。
<br/>