<br/>

```html
<!-- html -->
<m-button @click="openLoading">开始加载</m-button>
```
<br/>

```javascript
/*js*/
<script setup>
  import { Loading } from 'mzl-ui'
  const openLoading = () => {
    Loading.show()
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>
```
<br/>

#### 你也可以通过获取组件实例的方式来调用。
```javascript
/*js*/
<script setup>
import { getCurrentInstance } from "vue";
import { Loading } from 'mzl-ui'
const instance = getCurrentInstance()
const openLoading = () =>{
  instance.proxy.$Loading.show()
}
</script>
```
<br/>

## 区域加载
#### 可通过设置 <font color=#0e80eb>**target**</font>（元素类名或ID）来为指定区域添加。
<br/>