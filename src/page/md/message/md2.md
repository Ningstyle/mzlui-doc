<br/>

```html
<!-- html -->
<m-button @click="openMsg">消息提示</m-button>
```
<br/>

```javascript

<script setup>
  import { Message } from 'mzl-ui'
  const openMsg = () =>{
    Message({
      text: "默认消息提示"
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
import { Message } from 'mzl-ui'
const instance = getCurrentInstance()
const openMsg = () =>{
  instance.proxy.$message({ text: '默认消息提示！'})
}
</script>
```
<br/>

## 不同状态
#### 可根据 <font color=#0e80eb>**Message**</font> 参数的 <font color=#0e80eb>**type**</font> 来定义显示不同的状态。
<br/>