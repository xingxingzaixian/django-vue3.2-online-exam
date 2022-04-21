import apiHttp from '/@/utils/http'


// 创建考试记录
export const createExamRecordApi = async (exam_id: number): Promise<void> => {
  return apiHttp.post({
    url: '/api/exam/record/',
    data: {
      exam: exam_id
    }
  })
}