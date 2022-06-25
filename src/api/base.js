// API 接口进行统一管理
import mockRequest from '@/utils/mockRequest'
import request from '@/utils/request'

//#region Mock请求
export const mockTest = () => {
  return mockRequest({
    url: '/test',
    method: 'GET',
  })
}
//#endregion

export const getDailyChickenSoup = () => {
  return request({
    url: 'https://api.qqsuu.cn/api/index',
    method: 'GET',
  })
}
