<br/>

```html
<!-- html -->
<m-input v-model="value1" leftIcon="m-icon-search"></m-input>
<m-input v-model="value2" rightIcon="m-icon-calendar"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>
```
<br/>
<br/>

## 不同大小
#### 通过设置 <font color=#0e80eb>**size**</font> 属性来适应不同大小
<div style="width:350px;margin-bottom:1vh">
  <m-input v-model="value1"  placeholder="默认大小"></m-input>
</div>
<div style="width:350px;margin-bottom:1vh">
  <m-input v-model="value1"  placeholder="小的" size="small"></m-input>
</div>
<div style="width:350px">
  <m-input v-model="value1"  placeholder="更小的" size="mini"></m-input>
</div>
<br/>

```html
<!-- html -->
<m-input v-model="value1"  placeholder="默认大小"></m-input>
<m-input v-model="value2"  placeholder="小的" size="small"></m-input>
<m-input v-model="value3"  placeholder="更小的" size="mini"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>
```
<br/>
<br/>

## 组合输入
#### 可通过插槽完成组合输入，插槽名默认为 <font color=#0e80eb>**btn**</font>
<div style="width:350px">
  <m-input v-model="value1" clearable>
    <template #btn>
      <m-button type="primary" leftIcon="m-icon-search">搜索</m-button>
    </template>
  </m-input>
</div>
<br/>

```html
<!-- html -->
<m-input v-model="value1" clearable>
  <template #btn>
    <m-button type="primary" leftIcon="m-icon-search">搜索</m-button>
  </template>
</m-input>
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

## 密码类型
#### 密码类型的输入框，可通过 <font color=#0e80eb>**showPassword**</font> 来启用是否开启显示密码
<div style="width:350px">
  <m-input v-model="password" type="password" placeholder="请输入密码"></m-input>
</div>
<br/>

```html
<!-- html -->
<m-input v-model="password" type="password" placeholder="请输入密码"></m-input>
```
<br/>

```javascript
/*js*/
<script setup>
  import { ref } from "vue";
  const password = ref('')
</script>
```
<br/>
<br/>

## 自定义Focus颜色
#### 通过 <font color=#0e80eb>**focusColor**</font> 属性自定义input在获取焦点后的颜色
