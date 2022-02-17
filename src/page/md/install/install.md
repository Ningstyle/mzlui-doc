---
version: 0.2.0
---
# 安装使用 <a href="https://github.com/Ningstyle/mzlui-doc/blob/main/src/page/md/install/install.md" target="_back" title="您可在Github上编辑此页面"><i class="iconfont m-icon-bianji" style="font-size:25px;color:#0e80eb"></i></a>
## npm安装
#### 推荐使用npm的方式安装，如果您的网络环境质量不好，可选用cnpm
```bash
npm install  mzl-ui --save
cnpm install  mzl-ui --save
```
<br/>

## 使用 mzl-ui
#### 需要注意的是css样式文件需要您单独引入
```javascript
import { createApp } from 'vue'
import App from '@/App.vue'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'

const app = createApp(App)
app.use(mzlUi)
app.mount('#app')
			
```
<br/>

## 愉快开始
#### 至此mzl-ui就引入完成并且可以使用了，让我们一起去Demo 示例看下！
```html
<m-button>默认按钮</m-buttonn> 
<m-button type="primary">主要按钮</m-button>
			
```
<br/>

## 按需引用
#### 您可以根据个人需要按需引用组件来使用