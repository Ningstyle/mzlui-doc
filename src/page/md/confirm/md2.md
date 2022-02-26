<br/>

```html
<!-- html -->
<m-button @click="openConfirm">确认消息</m-button>
```
<br/>

```javascript
/*js*/
<script setup>
  import { Confirm, Message } from 'mzl-ui'
  const openConfirm = ()=>{
    Confirm({
      text:'您确认要删除这条数据吗？',
    }).then(() => {
      Message({text:"点击了确定"})
    }).catch(() => {
      Message({text:"点击了取消"})
    })
  }
</script>
```
<br/>

#### 你也可以通过获取组件实例的方式来调用。
```javascript
/*js*/
<script setup>
import { getCurrentInstance } from "vue";
import { Confirm, Message } from 'mzl-ui'
const instance = getCurrentInstance()
const openConfirm = () =>{
  instance.proxy.$Confirm({
    text:'您确认要删除这条数据吗？',
  }).then(() => {
    Message({text:"点击了确定"})
  }).catch(() => {
    Message({text:"点击了取消"})
  })
}
</script>
```
<br/>

## 拓展自定义配置
#### 自定义配置整个消息确认框的元素
<br/>