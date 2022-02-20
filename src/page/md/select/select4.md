<br/>

```html
<!-- html -->
<m-select v-model="selVal" placeholder="请选择" :options="selOptions" ></m-select>
```
<br/>

```javascript
/*js*/
import {reactive, ref} from 'vue'
const selVal = ref('')
const state = reactive({
  selOptions:[
    {"label":'中国',"value":'zhongguo'},
    {"label":'俄罗斯',"value":'eluosi',"disabled":true},
    {"label":'美国',"value":'meiguo'},
    {"label":'澳大利亚',"value":'aodaliya',"disabled":true},
    {"label":'巴基斯坦',"value":'bajisitan'}
  ]
})
const {selOptions} = state
```
<br/>

## 匹配不同格式的数据
#### 默认 <font color=#0e80eb>**options**</font> 接收 <font color=#0e80eb>**label**</font> 和 <font color=#0e80eb>**value**</font> 作为显示和值绑定，你可以根据 <font color=#0e80eb>**labelFiled**</font> 和 <font color=#0e80eb>**valueFiled**</font> 来重新确定字段的绑定，更方便的匹配不同格式的数据。