<template>
  <div class="rootApp">
		<div class="header-box">
			<header-block></header-block>
		</div>
		<div class="router-view">
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup>
import {onMounted} from 'vue'
import HeaderBlock from './components/header-block.vue'
onMounted(()=>{
  const script = document.createElement("script");
  script.src =
    "https://s4.cnzz.com/z_stat.php?id=1280948690&web_id=1280948690";   //该路径为点击统计代码后，页面中第一个 文字统计 script代码
  script.language = "JavaScript";
  document.body.appendChild(script);
})
</script>
<style lang="scss">
@font-face {
  font-family: "codefont"; /* Project id  */
  src: url('./assets/muiiconsfont.woff2') format('truetype');
}
.color-itembox{
  width: 100%;
  height: 100px;
  li{
    list-style: none;
    width: 240px;
    height: 100%;
    left: none;
    float: left;
    margin-right:.5vw;
    border-radius: 4px;
    color:#fff;
    text-align: center;
    span{
      width: 100%;
      display: inline-block;
      line-height: 24px;
      font-size:14px;
    }
    span:first-child{
      margin-top:20px;
    }
  }
  span.outherColor{
    width:90px ;
    height: 100%;
    display: inline-block;
    margin-right: .5vw;
    border-radius: 4px;
    text-align: center;
    line-height: 100px;
    color:#fff;
    font-size:14px;
  }
}
</style>
