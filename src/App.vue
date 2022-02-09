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
    font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    line-height: 1.5;
    direction: ltr;
    white-space: pre;
    text-align: left;
    word-wrap: normal;
    word-break: normal;
    word-spacing: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: 0 0;
	}
	pre > code > span{
		/* font-size:14px;
		font-family:'codefont' */
	}
	.codeDiv{
		width:100%;
		height:auto;
		overflow: hidden;
	}
	hr{
		margin:10px 0 !important;
	}
	.items{
		margin-bottom:12px;
	}
	button{
		margin-right:10px !important;
	}
	.items-last{
		margin-bottom:0px;
	}
	.mzl-icon-loading{
		animation: icon-loading 1.5s linear infinite;
			-webkit-animation: icon-loading 1.5s linear infinite;
	}
	@keyframes icon-loading{
		0%{-webkit-transform:rotate(0deg);}
		25%{-webkit-transform:rotate(90deg);}
		50%{-webkit-transform:rotate(180deg);}
		75%{-webkit-transform:rotate(270deg);}
		100%{-webkit-transform:rotate(360deg);}
	}
</style>
