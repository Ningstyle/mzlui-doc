<br/>

```html
<!-- html -->
<m-select v-model="selVal" placeholder="请选择" :options="selOptions" labelFiled="cityName" valueFiled="cityCode" @change="selchange"></m-select>
```
<br/>

```javascript
/*js*/
import {reactive, ref} from 'vue'
const selVal = ref('132')
const state = reactive({
  selOptions:[
    {"cityName":'北京',"cityCode":'131'},
    {"cityName":'天津',"cityCode":'332'},
    {"cityName":'上海',"cityCode":'289',"disabled":true},
    {"cityName":'重庆',"cityCode":'132'},
    {"cityName":'深圳',"cityCode":'340'}
  ]
})
const selchange = (item,index) =>{
	console.log(item,index);
}
const {selOptions} = state
```
<br/>

## 不同大小
#### 通过设置 <font color=#0e80eb>**size**</font> 属性来显示不同大小的select