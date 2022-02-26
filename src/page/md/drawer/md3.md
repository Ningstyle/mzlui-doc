<br/>

```html
<!-- html -->
<m-button @click="openDrawerOfLeft">左边-left</m-button>
<m-button @click="openDrawerOfTop">上边-top</m-button>
<m-button @click="openDrawerOfRight">右边-right</m-button>
<m-button @click="openDrawerOfBottom">下边-bottom</m-button>

<m-drawer v-model="drawerShow1" title="左边出现的抽屉">
  <template #content>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
  </template>
</m-drawer>
<m-drawer v-model="drawerShow2" title="上边出现的抽屉" direction="top">
  <template #content>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
  </template>
</m-drawer>
<m-drawer v-model="drawerShow3" title="右边出现的抽屉" direction="right">
  <template #content>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
    <div>这是内容区域...</div>
  </template>
</m-drawer>
<m-drawer v-model="drawerShow4" title="下边出现的抽屉" direction="bottom">
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
  const drawerShow1 = ref(false)
  const drawerShow2 = ref(false)
  const drawerShow3 = ref(false)
  const drawerShow4 = ref(false)
  const openDrawerOfLeft = () =>{
    drawerShow1.value = true
  }
  const openDrawerOfTop = () =>{
    drawerShow2.value = true
  }
  const openDrawerOfRight = () =>{
    drawerShow3.value = true
  }
  const openDrawerOfBottom = () =>{
    drawerShow4.value = true
  }
</script>
```
<br/>

## 使用具名插槽自定义
#### 使用具名插槽 <font color=#0e80eb>**#header**</font> 、 <font color=#0e80eb>**#content**</font> 、<font color=#0e80eb>**#footer**</font> 可对模态框整体根据需要自定义。你也可以通过 <font color=#0e80eb>**showHeader**</font> 和 <font color=#0e80eb>**showFooter**</font> 属性动态控制是否显示顶部和底部。
<br/>