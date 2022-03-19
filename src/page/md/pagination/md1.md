---
version: 0.4.0
title: pagination
---
# Pagination 分页 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/pagination/md1.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>

#### 用于页面数据请求过多分批请求
## 基本使用
#### Pagination组件基本使用示例。
<br/>

<m-pagination :total="100" :current="1" :pageSize="10"></m-pagination>

```html
<!-- html -->
<m-pagination :total="100" :current="1" :pageSize="10"></m-pagination>
```
<br/>

## 禁用状态
#### 通过 <font color=#0e80eb>**disabled**</font> 属性来开启禁用。

<m-pagination :total="100" :current="1" :pageSize="10" disabled></m-pagination>

```html
<!-- html -->
<m-pagination :total="100" :current="1" :pageSize="10" disabled></m-pagination>
```
<br/>

## 小型分页
#### 通过 <font color=#0e80eb>**size=small**</font> 属性来开启。
<m-pagination :total="100" :current="1" :pageSize="10" size="small"></m-pagination>
```html
<!-- html -->
<m-pagination :total="100" :current="1" :pageSize="10" size="small"></m-pagination>
```
<br/>

## 无边框
#### 通过 <font color=#0e80eb>**border=false**</font> 属性来开启。
<m-pagination :total="100" :current="1" :pageSize="10" :border="false"></m-pagination>
```html
<!-- html -->
<m-pagination :total="100" :current="1" :pageSize="10" :border="false"></m-pagination>
```
<br/>

## 每页展示最大页数
#### 通过 <font color=#0e80eb>**maxSize**</font> 控制每页展示最大页数，超出将进行滚动。