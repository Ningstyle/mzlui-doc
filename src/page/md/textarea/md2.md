<br/>

```html
<!-- html -->
<m-textarea v-model="textareaVal" placeholder="请输入内容" @input="textareaInpt"></m-textarea>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const textareaVal = ref("")
  const textareaInpt = (e) => {
    console.log(e);
  }
</script>
```
<br/>


## 禁用状态
#### 通过 <font color=#0e80eb>**disabled**</font> 启用。
<br/>