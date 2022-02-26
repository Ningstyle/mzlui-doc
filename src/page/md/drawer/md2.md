<br/>

```html
<!-- html -->
<m-button @click="openDrawer">基本使用</m-button>
<m-drawer v-model="drawerShow" title="基本使用" @confirm="confirmFn" @cancel="cancelFn">
  <template #content>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
  </template>
</m-drawer>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from 'vue';
  import { Message } from 'mzl-ui';
  const drawerShow = ref(false)
  const openDrawer = () =>{
    drawerShow.value = true
  }
  const confirmFn = () =>{
    Message({text: "确认事件"})
  }
  const cancelFn = () =>{
    Message({text: "取消事件"})
  }
</script>
```
<br/>

## 不同方向
#### 通过 <font color=#0e80eb>**direction**</font> 属性实现从不同方向出现。
<br/>