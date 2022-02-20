<br/>

```html
<!-- html 默认大小-->
<m-select v-model="selVal1" placeholder="默认大小" :options="selOptions"></m-select>

<!-- html 小的-->
<m-select v-model="selVal1" placeholder="小一点的" :options="selOptions" size="small"></m-select>

<!-- html 更小的-->
<m-select v-model="selVal1" placeholder="mini型的" :options="selOptions" size="mini"></m-select>
```
<br/>

## 可过滤搜索
#### 通过设置 <font color=#0e80eb>**searchable**</font> 属性来开启过滤搜索