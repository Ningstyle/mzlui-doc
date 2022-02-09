<template>
  <div class="cTitle">
    {{ctitle}}
    <span>
      &nbsp;
      {{ctips}}
    </span>
  </div>
</template>
<script setup>
defineProps({
  ctitle:String,
  ctips:String
})
</script>
<style scoped lang="scss">
.cTitle{
  width:100%;
  height:auto;
  overflow:hidden;
  padding:14px 0;
  box-sizing: border-box;
  color:#1f2f3d;
  font-size:18px;
  font-weight:500;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  span{
    font-size:14px;
    color:#657388
  }
}
</style>