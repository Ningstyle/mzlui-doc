<br />

```html
<!-- html -->
<m-tree :options="treeOptions" labelFiled="name"></m-tree>
```
<br />

```javascript
/*js*/
<script setup>
  import {
    reactive
  } from 'vue';
  const state = reactive({
    treeOptions: "JSON数据请点击查看：https://codepen.io/ningstyle/pen/Vwyadzp"
  })
  const {
    treeOptions
  } = state
</script>
```
<br />

## Attributes
#### 参数选项
<br/>
