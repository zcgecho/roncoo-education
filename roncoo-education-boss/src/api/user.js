import request from '@/utils/request'

// 学员分页列表接口
export function userExtList(params, pageCurrent = 1, pageSize = 20) {
  return request({
    url: '/user/pc/user/ext/list',
    method: 'post',
    data: { pageCurrent: pageCurrent, pageSize: pageSize, ...params }
  })
}
// 更新用户信息
export function userExtUpdate(data = {}) {
  return request({
    url: `/user/pc/user/ext/update`,
    method: 'post',
    data: data
  })
}

// 根据用户id查看用户信息
export function userExtView(data = {}) {
  return request({
    url: `/user/pc/user/ext/view`,
    method: 'post',
    data: data
  })
}
// 上传图片
export function uploadPic(platformEnum, data = {}) {
  return request({
    url: `/course/pc/upload/pic`,
    method: 'post',
    params: platformEnum,
    data: data
  })
}

// 讲师分页列表接口
export function lecturerList(params, pageCurrent = 1, pageSize = 20) {
  return request({
    url: '/user/pc/lecturer/list',
    method: 'post',
    data: { pageCurrent: pageCurrent, pageSize: pageSize, ...params }
  })
}

// 更新讲师信息
export function lecturerUpdate(data = {}) {
  return request({
    url: `/user/pc/lecturer/update`,
    method: 'post',
    data: data
  })
}

// 根据讲师id查看讲师信息
export function lecturerView(data = {}) {
  return request({
    url: `/user/pc/lecturer/view`,
    method: 'post',
    data: data
  })
}

// 讲师审核分页列表接口
export function lecturerAuditList(params, pageCurrent = 1, pageSize = 20) {
  return request({
    url: '/user/pc/lecturer/audit/list',
    method: 'post',
    data: { pageCurrent: pageCurrent, pageSize: pageSize, ...params }
  })
}

// 添加讲师审核信息
export function lecturerAuditSave(data = {}) {
  return request({
    url: `/user/pc/lecturer/audit/save`,
    method: 'post',
    data: data
  })
}

// 更新讲师审核信息
export function lecturerAuditUpdate(data = {}) {
  return request({
    url: `/user/pc/lecturer/audit/update`,
    method: 'post',
    data: data
  })
}

// 讲师审核
export function lecturerAudit(data = {}) {
  return request({
    url: `/user/pc/lecturer/audit/audit`,
    method: 'post',
    data: data
  })
}

// 根据讲师id查看讲师审核信息
export function lecturerAuditView(data = {}) {
  return request({
    url: `/user/pc/lecturer/audit/view`,
    method: 'post',
    data: data
  })
}

// 校验手机号是否已注册成为用户或已申请成为讲师
export function lecturerAuditCheck(data = {}) {
  return request({
    url: `/user/pc/lecturer/audit/check`,
    method: 'post',
    data: data
  })
}

// 讲师分润分页列表接口
export function lecturerProfitList(params, pageCurrent = 1, pageSize = 20) {
  return request({
    url: '/user/pc/lecturer/profit/list',
    method: 'post',
    data: { pageCurrent: pageCurrent, pageSize: pageSize, ...params }
  })
}
