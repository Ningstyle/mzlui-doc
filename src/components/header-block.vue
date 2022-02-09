<template>
  <div class="header-block-box">
		<div class="logoBox">
			<img src="../assets/logo.png" alt="" @click="toHome">
			<a href="javascript:;" @click="toHome">Mzl UI</a>
		</div>
		
	</div>
</template>

<script setup>
	import {useRouter} from 'vue-router'
	const router = useRouter()
	const toHome = () => {
		router.push('/')
	}
</script>

<style scoped lang="scss">
.header-block-box{
	width: 100%;
	height: 64px;
	background: #fff;
	box-shadow: 0 2px 8px #f0f1f2;
	.logoBox{
		height: 64px;
		padding-left: 40px;
		overflow: hidden;
		img{
			width: 22px;
			height: 22px;
			float: left;
			margin:20px 10px 0 0;
			cursor: pointer;
		}
		a{
			color: #4a5264;
			font-weight: 700;
			font-size: 18px;
			font-family: PuHuiTi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji,sans-serif;
			line-height: 64px;
			letter-spacing: -.18px;
			white-space: nowrap;
			text-decoration: none;
			float: left;
		}
	}
}
</style>
