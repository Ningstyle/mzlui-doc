<br />

```html
<!-- html -->
<m-button @click="openMsg1">消息提示</m-button>
<m-button @click="openMsg2">5秒后消失</m-button>
```
<br />

```javascript
<script setup>
  import { Message } from 'mzl-ui'
  const openMsg1 = () =>{
    Message({
      text: "自定义Icon！",
      icon:"m-icon-collection_fill"
    })
  }
  const openMsg2 = () =>{
    Message({
      text:"5秒后消失！",
      icon:"m-icon-good",
      timeout:5000
    })
  }
</script>
```
<br />

## Attributes
#### 参数选项
<br/>