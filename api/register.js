import request from '@/utils/request'
export default {
  //发送短信
  sendPhone(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get'
    })
  },
  //注册
  register(registerVo){
      return request({
          url:`/educore/ucenter/register`,
          method:'post',
          data: registerVo
      })
  }
}