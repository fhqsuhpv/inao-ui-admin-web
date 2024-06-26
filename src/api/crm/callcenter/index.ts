import request from '@/config/axios'


export interface CallVo {
  manufacturerId: number // 编号
  callId: number // 线索名称
  callType: number // 跟进状态
}

// CRM 呼叫中心 电话拔出
export const callCenterCall = async (data: CallVo) => {
  return await request.post({ url: `/crm/call-center/call`,data})
}

// CRM 呼叫中心 电话拔出
export const callCenterUserbyPhone = async (data: String) => {
  return await request.post({ url: `/crm/call-center/entryphone`,data})
}

export const Callyunke = async() =>{
  return await request.post({url:`/crm/call-center/callyunke`})
}


// 用户与呼叫中心用户绑定关系 VO
export interface CallcenterUserVO {
  id: number // 主建
  userId: number // 用户id
  yunkeCallcenterUserId: string // 云客用户id
  yunkeCallcenterPhone: string // 云客手机号
  lianlianCallcenterUserId: string // 连连用户id
  lianlianCallcenterPhone: string // 连连手机号
}

// 用户与呼叫中心用户绑定关系 API
export const CallcenterUserApi = {
  // 查询用户与呼叫中心用户绑定关系分页
  getCallcenterUserPage: async (params: any) => {
    return await request.get({ url: `/crm/callcenter-user/page`, params })
  },

  // 查询用户与呼叫中心用户绑定关系详情
  getCallcenterUser: async (id: number) => {
    return await request.get({ url: `/crm/callcenter-user/get?id=` + id })
  },

  // 新增用户与呼叫中心用户绑定关系
  createCallcenterUser: async (data: CallcenterUserVO) => {
    return await request.post({ url: `/crm/callcenter-user/create`, data })
  },

  // 修改用户与呼叫中心用户绑定关系
  updateCallcenterUser: async (data: CallcenterUserVO) => {
    return await request.put({ url: `/crm/callcenter-user/update`, data })
  },

  // 删除用户与呼叫中心用户绑定关系
  deleteCallcenterUser: async (id: number) => {
    return await request.delete({ url: `/crm/callcenter-user/delete?id=` + id })
  },

  // 导出用户与呼叫中心用户绑定关系 Excel
  exportCallcenterUser: async (params) => {
    return await request.download({ url: `/crm/callcenter-user/export-excel`, params })
  }
}