<template>
	<div class="contentBox">
		<div class="imgLogo">
			<img src="../assets/logo.png" alt="">
		</div>
		<h3>一套适合开发者使用的轻量级UI组件库，完美支持vite+vue3</h3>
		<div class="tiBox">
			<p>完美支持vite+vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的vue世界！</p>
			<div class="buttonGroups">
				<m-button type="primary" round style="padding:15px 50px;margin-right:2vw;font-size:17px" @click="toComponents">立即上手</m-button>
				<m-button round icon="m-icon-github" style="padding:15px 50px;margin-left:2vw;font-size:17px" @click="goGuthub">Github</m-button>
			</div>
			<div class="cardBox">
				<li>
					<p>更小的体积</p>
					<div>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
				</li>
				<li>
					<p>更快的响应</p>
					<div>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
				</li>
				<li>
					<p>更强的拓展性</p>
					<div>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
				</li>
				<li>
					<p>更完美的支持</p>
					<div>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
				</li>
				<li>
					<p>更友好的渲染</p>
					<div>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</div>
				</li>
			</div>
			<div class="links">
				<p class="titles">参与贡献</p>
				<li>style'me</li>
				<p class="titles">链接</p>
				<span>Github</span><span>NPM</span><span>关于MZL_UI</span><span>更新日志</span><span>关于我</span>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import {useRouter} from 'vue-router'
	const router = useRouter()
  const toComponents = () =>{
		router.push('/mzlui')
	}
	const goGuthub = ()=>{
		window.open('https://github.com/Ningstyle/mzlui-doc/')
	}
</script>
<style lang="scss" scoped>
	.contentBox{
		width: 100%;
		height: auto;
		overflow: hidden;
		min-height: calc(100vh - 64px);
		background: rgba(9,195,190,0.02);
		.imgLogo{
			margin:0 auto;
			display: block;
			width: 12vw;
			margin-top:60px;
			position: relative;
			img{
				width: 100%;
				display: block;
			}
		}
		
		h3{
			text-align: center;
			font-size: 2vw;
			color:#4a5264;
			margin:16px 0 0 0;
		}
		.tiBox{
			width: 70%;
			height: auto;
			overflow: hidden;
			margin:0 auto;
			p{
				text-align: center;
				color:#636e86;
				font-size:.9vw
			}
			.buttonGroups{
				width: 100%;
				text-align: center;
				height: auto;
				overflow: hidden;
				margin-top:5vh;
			}
			.cardBox{
				width: 100%;
				height: auto;
				overflow: hidden;
				margin-top:5vh;
				li{
					list-style: none;
					width: 19%;
					padding: 0 5px 25px 5px;
					box-sizing: border-box;
					float: left;
					list-style: none;
					background: #fff;
					// border: 1px solid #eaeefb;
					border-radius: 5px;
					box-sizing: border-box;
					transition: all .3s ease-in-out;
					margin-right:1%;
					cursor: pointer;
					&:hover{
						background: rgba(9,195,190,0.1);
					}
					p{
						font-size: 18px;
						color: #1f2f3d;
						font-weight: 400;
						padding: 0 14px
					}
					div{
						font-size: 14px;
						color: #919cac;
						padding: 0 0px;
						line-height: 20px;
						text-align: center;
					}
				}
				li:last-child{
					margin-right:0
				}
			}
			.links{
				width: 100%;
				height: auto;
				overflow: hidden;
				text-align: center;
				margin-bottom:30px;
				p{
					font-size: 20px;
					font-weight: 600;
					color: #515a6e;
					margin:0;
					line-height: 50px;;
				}
				span{
					display: inline-block;
					line-height: 30px;
					color:#3c506a;
					font-size: 16px;
					margin:5px 10px 5px 10px;
					cursor: pointer;
				}
			}
		}
	}
	
</style>