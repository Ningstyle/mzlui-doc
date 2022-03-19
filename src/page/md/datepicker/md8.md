<br/>

```html
<!-- html -->
<m-date
  v-model="dateVal10"
  placeholder="请选择日期"
  :startDate="startDate"
  :endDate="endDate">
</m-date>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref,computed } from 'vue';
  const dateVal = ref("")
  const startDate = computed(()=>{
    let date = new Date()
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-10).toLocaleDateString()
  })
  const endDate = computed(()=>{
    let date = new Date()
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()+10).toLocaleDateString()
  })
</script>
```
<br/>

## 自定义活动元素颜色
#### 设置可选择的日期范围限制。