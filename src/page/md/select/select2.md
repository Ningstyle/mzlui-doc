<br/>

```html
<!-- html -->
<m-select v-model="selVal" placeholder="请选择" :options="selOptions" @change="selchange"></m-select>
```
<br/>

```javascript
/*js*/
import {reactive, ref} from 'vue'
const selVal = ref('bajisitan')
const state = reactive({
  selOptions:[
    {"label":'中国',"value":'zhongguo'},
    {"label":'俄罗斯',"value":'eluosi'},
    {"label":'美国',"value":'meiguo'},
    {"label":'澳大利亚',"value":'aodaliya'},
    {"label":'巴基斯坦',"value":'bajisitan'}
  ]
})
const selchange = (item,index) =>{
  // 当前选中的值及index
	console.log(item,index);
}
const {selOptions} = state
```
<br/>

## 禁用状态
#### 可以设置 <font color=#0e80eb>**disabled**</font> 属性来实现禁用状态