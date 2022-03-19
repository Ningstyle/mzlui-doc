---
version: 0.4.0
title: pagination
---
# Backtop 回到顶部 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/backtop/md1.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>

#### 用于快捷返回到页面顶部的组件
## 基本使用
#### Backtop组件基本使用示例。
<br/>

```html
<!-- html -->
<m-backtop></m-backtop>
```
<br/>

## 绑定指定元素
#### 绑定指定元素监测滚动来触发。
<br/>

<div class="testBacktop" style="width:100%;height:300px;overflow-y:scroll;border:1px solid #f0f0f0;padding:10px;">
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
  <p>scroll</p>
</div>
<br/>


```html
<!-- html -->
<div class="testBacktop" style="width:100%;height:400px;overflow-y:scroll">
  <p>scroll</p>*20
</div>

<m-backtop target=".testBacktop"></m-backtop>
```
<br/>

```css
<style lang="scss" scoped>
.testBacktop{
  width:100%;
  height:300px;
  overflow-y:scroll;
  border:1px solid #f0f0f0;
  padding:10px;
}
</style>
```
<br/>

## 自定义元素展示
#### 通过插槽的方式自定义元素展示。
<br/>