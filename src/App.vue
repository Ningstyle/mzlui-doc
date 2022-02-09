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
import HeaderBlock from './components/header-block.vue'
</script>
<style>
@font-face {
  font-family: "codefont"; /* Project id  */
  src: url('./assets/muiiconsfont.woff2') format('truetype');
}
	.rootApp{
		font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji,sans-serif;
	}
	body{
		margin:0;
		padding:0
	}
	pre{
		margin:0;
	}
	pre > code{
		/* background: rgba(169,169,169,0.04) !important; */
	  border:1px solid #eee;
	  padding:0 1em !important;
	}
	pre > code > span{
		font-size:14px;
		font-family:'codefont'
	}
	.codeDiv{
		width:100%;
		height:auto;
		overflow: hidden;
	}
	.items{
		margin-bottom:12px;
	}
	.items-last{
		margin-bottom:0px;
	}
</style>
