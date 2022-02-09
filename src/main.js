import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import 'element-plus/dist/index.css';
import {createPinia} from 'pinia'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/color-brewer.css'
// import store from '@/store/index';
const app = createApp(App)
// app.config.globalProperties.$store = store
app.use(router)
app.use(mzlUi)
app.use(createPinia())
hljs.configure({
	ignoreUnescapedHTML: true,
	languages:['javascript','css','python','html','bash','java','sql','json','http','go','c++','c#','']
})
app.directive('highlight', function (el) {
	const blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
			hljs.highlightBlock(block)
	})
})

app.mount('#app')
