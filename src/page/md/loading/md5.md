<br/>

```html
<!-- html -->
<m-button @click="openLoading">更多自定义配置项</m-button>
```
<br/>

```javascript
/*js*/
<script setup>
  import { Loading } from 'mzl-ui'
  const openLoading = () => {
    Loading.show({
      text:'正在加载mzl-ui...',
      icon:'m-icon-loading3',
      scrollLock:true,
      textColor:'#333',
      bgColor:"rgba(248,253,255,.9)",
      showIcon:true,
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>
```
<br/>

## Attributes
#### 参数选项
<br/>