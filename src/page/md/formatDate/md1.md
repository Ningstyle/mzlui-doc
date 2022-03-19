---
version: 0.4.0
title: formatDate
---
# formatDate 时间戳转换日期格式 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/formatDate/md1.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>

#### 时间戳转换日期格式
## 基本使用
#### <font color=#0e80eb>**formatDate**</font> 方法基本使用示例。
<br/>

```javascript
/*js*/
import { onMounted } from 'vue'
import { $mzl } from 'mzl-ui'
onMounted(()=>{
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy-MM-dd hh:mm:ss'));
  /*输出结果*/
    //2022-12-30 10:10:00
})
```
<br/>

## 指定输出
#### 可以指定输出时间格式。
<br/>

```javascript
/*js*/
import { onMounted } from 'vue'
import { $mzl } from 'mzl-ui'
onMounted(()=>{
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy-MM-dd'));
  console.log($mzl.formatDate(new Date(1672366200000),'hh:mm:ss'));
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy'));
  /*输出结果*/
    //2022-12-30
    //10:10:00
    //2022
})
```
<br/>

## 指定连接符
#### 可以指定输出格式的连接符。
<br/>

```javascript
/*js*/
import { onMounted } from 'vue'
import { $mzl } from 'mzl-ui'
onMounted(()=>{
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy/MM/dd'));
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy年MM月dd日'));
  console.log($mzl.formatDate(new Date(1672366200000),'hh时mm分ss秒'));
  /*输出结果*/
    // 2022/12/30
    // 2022年12月30日
    // 10时10分00秒
})
```
<br/>

## 单独获取年月日或时分秒
#### 单独获取年月日或时分秒。
<br/>

```javascript
/*js*/
import { onMounted } from 'vue'
import { $mzl } from 'mzl-ui'
onMounted(()=>{
  console.log($mzl.formatDate(new Date(1672366200000),'yyyy'));
  console.log($mzl.formatDate(new Date(1672366200000),'MM'));
  console.log($mzl.formatDate(new Date(1672366200000),'hh'));
  /*输出结果*/
    // 2022
    // 12
    // 10
})
```
<br/>

## Attributes
#### 参数选项
<br/>