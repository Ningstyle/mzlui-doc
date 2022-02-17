---
version: 0.20
title: button
---
# Button按钮 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/button/button.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>

#### 网页常用button按钮，常用于响应一个事件或处理某个逻辑
<br/>
<div class="items">
  <span><m-button>默认按钮</m-button></span>  
  <span><m-button type="primary">主要按钮</m-button></span> 
  <span><m-button type="success">成功按钮</m-button></span> 
  <span><m-button type="danger">危险按钮</m-button></span> 
  <span><m-button type="warning">警告按钮</m-button></span> 
  <span><m-button type="dashed">虚线按钮</m-button></span> 
  <span><m-button type="text">文本按钮</m-button></span>
</div>
<div class="items">
  <span><m-button round>默认按钮</m-button></span>  
  <span><m-button type="primary" round>主要按钮</m-button></span>
  <span><m-button type="success" round>成功按钮</m-button></span> 
  <span><m-button type="danger" round>危险按钮</m-button></span> 
  <span><m-button type="warning" round>警告按钮</m-button></span> 
  <span><m-button type="dashed" round>虚线按钮</m-button></span>
</div>
<div class="items">
  <span><m-button leftIcon="m-icon-electronics"><i class="iconfont m-icon-electronics"></i></m-button></span>  
  <span><m-button type="primary" size="small" leftIcon="m-icon-edit"><i class="iconfont m-icon-edit"></i></m-button></span>
  <span><m-button type="success" size="mini" disabled leftIcon="m-icon-add-circle"><i class="iconfont m-icon-add-circle"></i></m-button></span> 
  <span><m-button type="danger" round disabled leftIcon="m-icon-home"><i class="iconfont m-icon-home"></i></m-button></span> 
  <span><m-button type="warning" round leftIcon="m-icon-calendar"><i class="iconfont m-icon-calendar"></i></m-button></span> 
  <span><m-button type="dashed" round leftIcon="m-icon-upload"><i class="iconfont m-icon-upload"></i></m-button></span>
  <span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437"><i class="iconfont m-icon-ashbin"></i>删除</m-button></span>
</div>

```html
<!-- html -->
<m-button>默认按钮</m-buttonn> 
<m-button type="primary">主要按钮</m-button> 
<m-button type="success">成功按钮</m-button> 
<m-button type="danger">危险按钮</m-button> 
<m-button type="warning">警告按钮</m-button> 
<m-button type="dashed">虚线按钮</m-button> 
<m-button type="text">文本按钮</m-button> 

<m-button round>默认按钮</m-buttonn> 
<m-button type="primary" round>主要按钮</m-button> 
<m-button type="success" round>成功按钮</m-button> 
<m-button type="danger" round>危险按钮</m-button> 
<m-button type="warning" round>警告按钮</m-button> 
<m-button type="dashed" round>虚线按钮</m-button>

<m-button leftIcon="m-icon-electronics"></m-buttonn> 
<m-button type="primary" leftIcon="m-icon-edit"></m-button> 
<m-button type="success" leftIcon="m-icon-add-circle" disabled></m-button> 
<m-button type="danger" leftIcon="m-icon-home" disabled></m-button> 
<m-button type="warning" leftIcon="m-icon-calendar"></m-button> 
<m-button type="dashed" leftIcon="m-icon-upload"></m-button> 
<m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437">删除</m-button> 
```
<br/>

## 禁用状态
#### 按钮不可操作的状态——通过<font color=#0e80eb>**disabled**</font> 属性设置实现
<br/>
<div class="items">
  <span><m-button disabled>默认按钮</m-button></span>  
  <span><m-button type="primary" disabled>主要按钮</m-button></span> 
  <span><m-button type="success" disabled>成功按钮</m-button></span> 
  <span><m-button type="danger" disabled>危险按钮</m-button></span> 
  <span><m-button type="warning" disabled>警告按钮</m-button></span> 
  <span><m-button type="dashed" disabled>虚线按钮</m-button></span> 
  <span><m-button type="text" disabled>文本按钮</m-button></span>
</div>
<div class="items">
  <span><m-button round disabled>默认按钮</m-button></span>  
  <span><m-button type="primary" round disabled>主要按钮</m-button></span> 
  <span><m-button type="success" round disabled>成功按钮</m-button></span> 
  <span><m-button type="danger" round disabled>危险按钮</m-button></span> 
  <span><m-button type="warning" round disabled>警告按钮</m-button></span> 
  <span><m-button type="dashed" round disabled>虚线按钮</m-button></span> 
  <span><m-button type="text" round disabled>文本按钮</m-button></span>
</div>

```html
<!-- html -->
<m-button disabled>默认按钮</m-buttonn> 
<m-button type="primary" disabled>主要按钮</m-button> 
<m-button type="success" disabled>成功按钮</m-button> 
<m-button type="danger" disabled>危险按钮</m-button> 
<m-button type="warning" disabled>警告按钮</m-button> 
<m-button type="dashed" disabled>虚线按钮</m-button> 
<m-button type="text" disabled>文本按钮</m-button> 

<m-button round disabled>默认按钮</m-buttonn> 
<m-button type="primary" round disabled>主要按钮</m-button> 
<m-button type="success" round disabled>成功按钮</m-button> 
<m-button type="danger" round disabled>危险按钮</m-button> 
<m-button type="warning" round disabled>警告按钮</m-button> 
<m-button type="dashed" round disabled>虚线按钮</m-button>
<m-button type="text" round disabled>文本按钮</m-button>
```
<br/>

## 不同大小
#### 不同大小类型的按钮——通过 <font color=#0e80eb>**size**</font> 属性设置实现
<br/>
<div class="items">
  <span><m-button>默认大小</m-button></span>  
  <span><m-button type="primary">默认大小</m-button></span>
  <span><m-button type="success" size="medium">中等大小</m-button></span> 
  <span><m-button type="danger" size="medium">中等大小</m-button></span> 
  <span><m-button type="warning" size="small">小型按钮</m-button></span> 
  <span><m-button type="dashed" size="mini">超小按钮</m-button></span>
  <span><m-button type="text" size="mini">超小按钮</m-button></span>
</div>
<div class="items">
  <span><m-button round>默认大小</m-button></span>  
  <span><m-button type="primary" round>默认大小</m-button></span>
  <span><m-button type="success" size="medium" round>中等大小</m-button></span> 
  <span><m-button type="danger" size="medium" round>中等大小</m-button></span> 
  <span><m-button type="warning" size="small" round>小型按钮</m-button></span> 
  <span><m-button type="dashed" size="mini" round>超小按钮</m-button></span>
</div>

```html
<!-- html -->
<m-button>默认大小</m-buttonn> 
<m-button type="primary">默认大小</m-button> 
<m-button type="success" size="medium">中等大小</m-button> 
<m-button type="danger" size="medium">中等大小</m-button> 
<m-button type="warning" size="small">小型按钮</m-button> 
<m-button type="dashed" size="mini">超小按钮</m-button> 
<m-button type="text" size="mini">超小按钮</m-button> 

<m-button round >默认大小</m-buttonn> 
<m-button type="primary" round >默认大小</m-button> 
<m-button type="success" round size="medium">中等大小</m-button> 
<m-button type="danger" round size="medium">中等大小</m-button> 
<m-button type="warning" round size="small">小型按钮</m-button> 
<m-button type="dashed" round size="mini">超小按钮</m-button>
```
<br/>

## 图标按钮
#### 带图标类型的按钮——通过 <font color=#0e80eb>**leftIcon**</font> 或者 <font color=#0e80eb>**rightIcon**</font> 属性设置实现并确定icon出现的位置
<br/>
<div class="items">
  <span><m-button leftIcon="m-icon-complete"><i class="iconfont m-icon-complete"></i> 按钮</m-button></span>  
  <span><m-button type="primary" size="medium" leftIcon="m-icon-add-circle"><i class="iconfont m-icon-add-circle"></i> 添加</m-button></span>
  <span><m-button type="success" size="small" leftIcon="m-icon-home"><i class="iconfont m-icon-home"></i> 主页</m-button></span> 
  <span><m-button type="danger"  size="mini" rightIcon="m-icon-calendar">日历 <i class="iconfont m-icon-calendar"></i></m-button></span> 
  <span><m-button type="warning" round leftIcon="m-icon-upload"><i class="iconfont m-icon-upload"></i> 上传</m-button></span> 
  <span><m-button type="dashed" round rightIcon="m-icon-search">搜索 <i class="iconfont m-icon-search"></i></m-button></span>
  <span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437"><i class="iconfont m-icon-ashbin"></i> 删除</m-button></span>
</div>
<div class="items">
  <span><m-button leftIcon="m-icon-electronics"><i class="iconfont m-icon-electronics"></i></m-button></span>  
  <span><m-button type="primary" size="small" leftIcon="m-icon-edit"><i class="iconfont m-icon-edit"></i></m-button></span>
  <span><m-button type="success" size="mini" leftIcon="m-icon-add-circle"><i class="iconfont m-icon-add-circle"></i></m-button></span> 
  <span><m-button type="danger" round leftIcon="m-icon-home"><i class="iconfont m-icon-home"></i></m-button></span> 
  <span><m-button type="warning" round leftIcon="m-icon-calendar"><i class="iconfont m-icon-calendar"></i></m-button></span> 
  <span><m-button type="dashed" round leftIcon="m-icon-upload"><i class="iconfont m-icon-upload"></i></m-button></span>
  <span><m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"><i class="iconfont m-icon-ashbin"></i></m-button></span>
</div>

```html
<!-- html -->
<m-button leftIcon="m-icon-complete">按钮</m-buttonn> 
<m-button type="primary" size="small" leftIcon="m-icon-add-circle">添加</m-button> 
<m-button type="success" leftIcon="m-icon-home">主页</m-button> 
<m-button type="danger" rightIcon="m-icon-calendar">日历</m-button> 
<m-button type="warning" leftIcon="m-icon-upload">上传</m-button> 
<m-button type="dashed" rightIcon="m-icon-search">搜索</m-button> 
<m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437">删除</m-button>  

<m-button icon="m-icon-electronics"></m-buttonn> 
<m-button type="primary" size="small" icon="m-icon-edit"></m-button> 
<m-button type="success" size="mini" icon="m-icon-add-circle"></m-button> 
<m-button type="danger" round icon="m-icon-date-home"></m-button> 
<m-button type="warning" round icon="m-icon-calendar"></m-button> 
<m-button type="dashed" round icon="m-icon-upload"></m-button> 
<m-button type="text" icon="m-icon-ashbin" style="color:#ec3437"></m-button> 
```
<br/>

## 加载状态
#### 正在加载中的状态按钮——通过 <font color=#0e80eb>**loading**</font> 和 <font color=#0e80eb>**leftIcon**</font> 或者 <font color=#0e80eb>**rightIcon**</font> 属性设置实现并确定icon出现的位置
<br/>
<div class="items">
  <span><m-button round localing disabled leftIcon="m-icon-loading1"><i class="iconfont m-icon-loading1 mzl-icon-loading"></i> 加载中</m-button></span>  
  <span><m-button type="primary" round leftIcon="m-icon-loading2" localing><i class="iconfont m-icon-loading2 mzl-icon-loading"></i> 加载中</m-button></span>
  <span><m-button type="success" disabled leftIcon="m-icon-loading3" localing><i class="iconfont m-icon-loading3 mzl-icon-loading"></i> 加载中</m-button></span> 
  <span><m-button type="danger" rightIcon="m-icon-loading4" localing>加载中 <i class="iconfont m-icon-loading4 mzl-icon-loading"></i></m-button></span> 
  <span><m-button type="warning" rightIcon="m-icon-loading5" localing>加载中 <i class="iconfont m-icon-loading5 mzl-icon-loading"></i></m-button></span> 
  <span><m-button type="text" leftIcon="m-icon-loading6" localing>加载中 <i class="iconfont m-icon-loading6 mzl-icon-loading"></i></m-button></span>
</div>

```html
<!-- html -->
<m-button round localing disabled leftIcon="m-icon-loading1">加载中</m-buttonn> 
<m-button type="primary" round leftIcon="m-icon-loading2" localing>加载中</m-button> 
<m-button type="success" disabled leftIcon="m-icon-loading3" localing>加载中</m-button> 
<m-button type="danger" rightIcon="m-icon-loading4" localing>加载中</m-button> 
<m-button type="warning" rightIcon="m-icon-loading5" localing>加载中</m-button> 
<m-button type="text" leftIcon="m-icon-loading6" localing>加载中</m-button> 
```
<br/>

## 自定义颜色
#### 可以自定义颜色的按钮类型——通过设置 <font color=#0e80eb>**type**</font> 为 <font color=#0e80eb>**custom**</font> 和 <font color=#0e80eb>**customColor**</font> 属性设置实现。 <font color=#0e80eb>tips</font>：需要注意的是 <font color=#0e80eb>**type**</font> 为 <font color=#0e80eb>**default**</font>、<font color=#0e80eb>**dashed**</font>、<font color=#0e80eb>**text**</font> 类型的按钮不支持自定义
<br/>
<div class="items">
  <span><m-button>默认按钮不支持</m-button></span>
  <span><m-button type="dashed">虚线按钮不支持</m-button></span>
  <span><m-button type="text">文本按钮不支持</m-button></span>  
  <span><m-button type="custom" customColor="#9935f5" style="background:#9935f5;border:1px solid #9935f5; color:#fff">自定义颜色</m-button></span>
  <span><m-button type="custom" customColor="#1ba7dd" style="background:#1ba7dd;border:1px solid #1ba7dd; color:#fff">自定义颜色</m-button></span> 
  <span><m-button type="custom" round customColor="#d33cc7" style="background:#d33cc7;border:1px solid #d33cc7; color:#fff">自定义颜色</m-button></span> 
  <span><m-button type="custom" round customColor="#0008ff"  leftIcon="m-icon-loading6" localing disabled style="background:#0008ff;border:1px solid #0008ff; color:#fff"><i class="iconfont m-icon-loading6 mzl-icon-loading"></i> 自定义颜色</m-button></span>
</div>

```html
<!-- html -->
<m-button type="custom" customColor="#9935f5">自定义颜色</m-button> 
<m-button type="custom" customColor="#1ba7dd">自定义颜色</m-button> 
<m-button type="custom" round customColor="#d33cc7">自定义颜色</m-button> 
<m-button type="custom" round customColor="#0008ff" icon="m-icon-spinner6" localing disabled>自定义颜色</m-button>
```
<br/>

## Attributes
#### 参数选项
<br/>