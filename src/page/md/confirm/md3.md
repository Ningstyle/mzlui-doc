<br/>

```html
<!-- html -->
<m-button @click="openConfirm">自定义配置</m-button>
```
<br/>

```javascript
/*js*/
<script setup>
  import { Confirm, Message } from 'mzl-ui'
  const openConfirm = ()=>{
    Confirm({
      title:"提示信息",
      text: '确认2022-02-02是您的生日吗？',
      icon:"m-icon-calendar",
      confirmText:"是的",
      cancelText:"不是",
      closeShow:false
    }).then(() => {
      Message({text:"是的"})
    }).catch(() => {
      Message({text:"不是"})
    })
  }
</script>
```
<br/>

## Attributes
#### 参数选项
<br/>