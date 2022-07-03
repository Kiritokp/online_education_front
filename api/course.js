import request from '@/utils/request'
export default {
  //课程条件查询带分页
  getCoursePage(page,limit,courseQueryVo) {
    return request({
      url: `/eduservice/coursefront/getCoursePage/${page}/${limit}`,
      method: 'post',
      data: courseQueryVo
    })
  },
  //课程分类列表
  getSubjectList(){
    return request({
        url: '/eduservice/subject/getAllSubject',
        method: 'get'
    })
  },
  //根据一级分类的id查二级分类
  getTwoSubject(id){
    return request({
        url: '/eduservice/subject/getTwoSubject/'+id,
        method: 'get'
    })
  },
  //根据课程id查询信息
  getById(id){
      return request({
          url:'/eduservice/coursefront/getCourseInfo/'+id,
          method:'get'
      })
  }
}