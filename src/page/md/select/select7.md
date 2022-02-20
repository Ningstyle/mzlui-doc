<br />

```html
<!-- html-->
<m-select v-model="selVal" placeholder="可搜索" :options="selOptions" searchable></m-select>
```
<br />

```javascript
/*js*/
import {reactive, ref} from 'vue'
const selVal = ref('')
const state = reactive({
  selOptions:[
    {"label":'中国',"value":"1"},
    {"label":'Node',"value":"Node"},
    {"label":'CSS',"value":"CSS"},
    {"label":'javascript',"value":"javascript"},
    {"label":'mzl-ui',"value":"mzl-ui"},
    {"label":'mzl-vi',"value":"mzl-vi"},
    {"label":'Npm',"value":"Npm"},
    {"label":'HTML',"value":"HTML","disabled":true},
    {"label":'java',"value":"java"},
    {"label":'XML',"value":"XML"},
    {"label":'mzl-ci',"value":"mzl-ci"}
  ]
})
const {selOptions} = state
```
<br/>

## 多选
#### 通过设置 <font color=#0e80eb>**multiple**</font> 属性来开启多选