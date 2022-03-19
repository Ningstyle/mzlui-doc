<br/>

```html
<!-- html -->
<m-tree :options="treeOptions" :defaultOpenNodes="['0-2']"></m-tree>
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

## 匹配不同格式
#### 通过设置 <font color=#0e80eb>**labelFiled**</font> 可替换默认 <font color=#0e80eb>**lable**</font> 字段的展示，匹配不同数据格式。
<br/>