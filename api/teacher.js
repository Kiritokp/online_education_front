import request from '@/utils/request'
export default {
  //讲师分页查询
  getTeacherList(current,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherPage/${current}/${limit}`,
      method: 'get'
    })
  },
  //讲师详情
  getTeacherInfo(id){
      return request({
          url:`/eduservice/teacherfront/getTeacherInfo/${id}`,
          method:'get'
      })
  }
}