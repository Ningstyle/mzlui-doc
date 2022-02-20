---
version: 0.2.0
---
# Input 输入框 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/input/input.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>
#### 数据输入框类型，通过键盘输入字符
## 基本使用
#### input的基本使用
<div style="width:350px"><m-input placeholder="基本使用"></m-input></div>
<br/>

```html
<!-- html -->
<m-input v-model="value1" placeholder="基本使用"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
</script>
```
<br/>
<br/>

## 禁用状态
#### input的禁用状态，通过 <font color=#0e80eb>**disabled**</font> 属性限制输入及操作
<div style="width:350px"><m-input disabled placeholder="禁用状态"></m-input></div>
<br/>

```html
<!-- html -->
<m-input v-model="value1" disabled placeholder="基本使用"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
</script>
```
<br/>
<br/>

## 可清空数据
#### input的value可快捷清空，通过 <font color=#0e80eb>**clearable**</font> 属性启用
<div style="width:350px">
  <m-input v-model="value1" clearable @clear="clear" placeholder="可清空"></m-input>
</div>
<br/>

```html
<!-- html -->
<m-input v-model="value1" clearable @clear="clear" placeholder="可清空"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const clear = () =>{
    console.log("清空")
  }
</script>
```
<br/>
<br/>

## 带图标
#### 可使用 <font color=#0e80eb>**leftIcon**</font> 或者 <font color=#0e80eb>**rightIcon**</font> 来定义显示图标并确定显示的位置。需要注意的是如果定义了右侧显示图标，那 <font color=#0e80eb>**clearable**</font> 讲不再起作用
<br/>
