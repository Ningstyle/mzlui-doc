import { ElLoading } from 'element-plus'
import _ from 'lodash'
 
let needLoadingRequestCount = 0
let loading
 
function startLoading() {
  loading = ElLoading.service({
    lock: true,
    text: 'loading...', 
    background: 'rgba(255, 255, 255, .4)'
  })
}
 
function endLoading() {
  loading.close()
}
 
const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
 
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
 
export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    _.debounce(tryCloseLoading, 100)()  //延迟100ms
  }
}