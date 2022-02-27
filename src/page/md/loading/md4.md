<br/>

```html
<!-- html -->
<m-button @click="openLoading">自定义加载图片</m-button>
```
<br/>

```javascript
/*js*/
<script setup>
  import { Loading } from 'mzl-ui'
  const openLoading = () => {
    Loading.show({
      text:"正在努力加载中...",
      img:"https://mzlui.codeym.com/logo.png"
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>
```
<br/>

## 更多自定义配置项
#### 更多配置项示例。
<br/>