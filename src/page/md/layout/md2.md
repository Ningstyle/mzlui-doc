<br/>

```html
<!-- html -->
<div class="layoutBox">
  <m-row>
    <m-col :span="12"><div class="col-box-2 col-box">12</div></m-col>
    <m-col :span="12"><div class="col-box-1 col-box">12</div></m-col>
  </m-row>
  <m-row>
    <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
    <m-col :span="8"><div class="col-box-2 col-box">8</div></m-col>
    <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
  </m-row>
  <m-row>
    <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
  </m-row>
  <m-row>
    <m-col :span="4"><div class="col-box-1 col-box">4</div></m-col>
    <m-col :span="2"><div class="col-box-2 col-box">2</div></m-col>
    <m-col :span="4"><div class="col-box-1 col-box">4</div></m-col>
    <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
    <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
  </m-row>
</div>
```
<br/>

```css
// css
<style lang="scss" scoped>
.layoutBox{
  width: 100%;
  height: auto;
  overflow: hidden;
  border:1px solid #eee;
  border-radius: 4px;
  padding:25px 15px 15px 15px;
  .col-box{
    height:34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1{
    background-color: #9eaaaf;
    color:#333
  }
  .col-box-2{
    background-color: #505050;
    color:#fff
  }
}
</style>
```
<br/>

## 位置偏移
#### 通过 offset 设置偏移占用指定的列数。
<br/>