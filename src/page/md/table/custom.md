<br/>

```html
<!-- html options使用的第一个例子的options-->
<m-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle " size="mini"></m-table>
```
<br/>

```javascript
/*js*/
<script setup>
  import { reactive,ref } from 'vue'
  const state = reactive({
    headStyle:{
      color:"#fff",
      borderColor:"#4c94d1",
      backgroundColor:"rgba(25,66,120,.9)"
    },
    rowStyle:{
      borderColor:"#4c94d1",
    }
  })
  const {headStyle,rowStyle} = state
</script>
```