<br/>

```html
<!-- html -->
<m-button @click="openModal">打开模态框</m-button>
<m-modal v-model="modalShow" title="模态框标题">
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

```javascript
/*js*/
<script setup>
  import {ref} from 'vue'
  const modalShow = ref(false)
  const openModal = () =>{
    modalShow.value = true
  }
</script>
```
<br/>

## 居中布局
#### 设置 <font color=#0e80eb>**align**</font> 为 <font color=#0e80eb>**center**</font> 即可
<br/>