<template>
  <m-title mtitle="安装使用" mins="介绍基础的mzl-ui的安装和使用方法"></m-title>
	<c-title ctitle="npm 安装" ctips="推荐使用npm的方式安装，如果您的网络环境质量不好，可选用cnpm"></c-title>
	<div v-highlight class="codeDiv">
		<pre>
			<code>
npm insta  mzl-ui --save

cnpm insta  mzl-ui --save
			</code>
		</pre>
	</div>
	<c-title ctitle="使用 mzl-ui" ctips="需要注意的是css样式文件需要您单独引入"></c-title>
	<div v-highlight class="codeDiv">
		<pre>
			<code>
import { createApp } from 'vue'
import App from '@/App.vue'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'

const app = createApp(App)
app.use(mzlUi)
app.mount('#app')
			</code>
		</pre>
	</div>
	<c-title ctitle="愉快开始" ctips="至此mzl-ui就引入完成并且可以使用了，让我们一起去Demo 示例看下！"></c-title>
		<div v-highlight class="codeDiv">
		<pre>
			<code>
&lt;m-button&gt;默认按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary"&gt;主要按钮&lt;/m-button&gt;
			</code>
		</pre>
	</div>
</template>
<script setup>
import mTitle from '@/components/mtitle.vue'
import cTitle from '@/components/ctitle.vue'
import block from '@/components/block.vue'
</script>
<style scoped lang="scss">
.installBox{
	font-family: Consolas, Monaco, monospace;
}

</style>