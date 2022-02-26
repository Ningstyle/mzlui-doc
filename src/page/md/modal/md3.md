<br />

```html
<!-- html -->
<m-button @click="openModal">打开模态框</m-button>
<m-modal v-model="modalShow" title="模态框标题" align="center" width="30%">
  <template #content>
    这是内容区域
  </template>
  <template #footer>
    <m-button size="small" style="margin-right:15px" @click="modalShow = false">取消</m-button>
    <m-button type="primary" size="small" @click="modalShow = false">确认</m-button>
  </template>
</m-modal>
```
<br/>

## 使用具名插槽自定义
#### 使用具名插槽 <font color=#0e80eb>**#header**</font> 、 <font color=#0e80eb>**#content**</font> 、<font color=#0e80eb>**#footer**</font> 可对模态框整体根据需要自定义。
<br/>
