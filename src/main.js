import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import {createPinia} from 'pinia'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'
import './styles/app.scss'
const app = createApp(App)
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
