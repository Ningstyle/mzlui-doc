import request from '@/axios/index.js'
import {BASE_URL} from '@/config/index.js'
// 测试api
export const getinvoiceMData = (data) => {
  return request({
    url: BASE_URL+'business/common/getinvoiceM',
    method: 'get',
		dataType:'json',
    params: data,
  })
}