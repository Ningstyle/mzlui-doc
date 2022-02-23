<br/>

```html
<!-- html -->
<m-dropdown title="下拉菜单" :options="dorpoptions" @change="dropchange"></m-dropdown>
```
<br/>

```javascript
/*js*/
<script setup>
  import {reactive} from 'vue'
  const state = reactive({
    dorpoptions:[
      {"label":"菜单1"},
      {"label":"菜单2"},
      {"label":"菜单3"},
      {"label":"菜单4"},
      {"label":"菜单5"},
    ]
  })
  const dropchange = (item,index) =>{
  	console.log(item,index);
  }
  const {dorpoptions} = state
</script>
````
<br/>

## 不同大小
#### 通过设置 <font color=#0e80eb>**size**</font> 属性适应不同大小。