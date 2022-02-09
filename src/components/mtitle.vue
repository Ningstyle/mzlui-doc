<template>
  <div class="titleBox-item">
    <div class="mtitle">
      <p class="cmtitle">{{mtitle}}</p>
      <span>{{mins}}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
 mtitle:String,
 mins:String,
})
</script>
<style lang="scss" scoped>
.titleBox-item{
  width:100%;
  height:auto;
  overflow: hidden;
  .mtitle{
    width: 100%;
    height:auto;
    overflow:hidden;
    border-bottom:1px solid #0000000f;
    padding-bottom:15px;
    .cmtitle{
      color:#000000d9;
      font-size: 28px;
      margin-top:0;
      margin-bottom:10px;
    }
    span{
      font-size:14px;
      color:#000000d9
    }
  }
}

</style>