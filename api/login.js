import request from '@/utils/request'
export default {
  //登录
  login(loginVo) {
    return request({
      url: `/educore/ucenter/login`,
      method: 'post',
      data: loginVo
    })
  },
  //根据token获取用户信息
  getMemberInfo(){
      return request({
          url:`/educore/ucenter/getMemberInfo`,
          method:'get'
      })
  }
}