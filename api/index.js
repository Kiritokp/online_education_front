import request from '@/utils/request'
export default {
  //获取8个热门课程和4个名师
  getCourseTeacher() {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}