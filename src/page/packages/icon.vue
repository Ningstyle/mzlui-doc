<template>
	<div v-highlight>
	  <icon-md></icon-md>
	</div>
	<p class="titlep">所有图标</p>
	<div class="">
		<m-input v-model="keywords" leftIcon="m-icon-search" placeholder="输入图标关键词进行搜索" @input="search"></m-input>
	</div>
	<div class="iconListBox">
		<ul>
			<li v-for="(item,index) in IconListData" :key="index">
				<i class="iconfont" :class="item.className"></i>
				<span>{{item.className}}</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import iconList from '@/const/iconList.js'
	import { VueComponent as iconMd } from '@/page/md/icon/icon.md'
	const keywords = ref('')
	const IconListData = ref(iconList)
	// const state = reactive({
	// 	IconListData:iconList
	// })
	const search = (e)=>{
		IconListData.value = []
		iconList.filter(item=>{
			if(item.className.indexOf(e)!=-1){
				IconListData.value.push(item)
			}
			
		})
	}
	// const {IconListData} = state
</script>

<style lang="scss" scope>
	.iconListBox{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top:2vh;
		ul{
			margin:0;
			padding: 0;
			width: 100%;
			height: auto;
			overflow: hidden;
			li{
				list-style: none;
				width: 10.5vw;
				height: 140px;
				float: left;
				padding:1vw;
				box-sizing: border-box;
				text-align: center;
				transition: all .15s ease;
				cursor: pointer;
				border-radius: 4px;
				i{
					font-size:40px;
					color:#555;
					display: block;
					margin-top:1vh;
				}
				span{
					margin-top: 1vh;
					display: inline-block;
					font-size:.9vw;
					color:#555;
					margin-bottom:1vh;
				}
				&:hover{
					background-color:#0e80eb ;
					i{
						color:#fff
					}
					span{
						color:#fff
					}
				}
			}
		}
	}
</style>
