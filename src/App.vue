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
</style>
