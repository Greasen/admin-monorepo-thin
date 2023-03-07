/**
 * 审计-事件类型
 */
export enum EventTypes {
  'ADD' = '新增',
  'UPDATE' = '修改',
  'DELETE' = '删除',
  'SELECT' = '查询',
  'LOGIN' = '登录',
  'LOGOUT' = '退出',
  'IMPORT' = '导入',
  'EXPORT' = '导出',
  'UPLOAD' = '上传',
  'DOWNLOAD' = '下载',
  'OTHER' = '其他',
}

export enum AlarmLevelList {
  '正常',
  '预警',
  '一般',
  '严重',
  '危机',
}

/**
 * 事件类型
 */
export const EventTypeList = [
  {
    label: '全部',
    value: '',
  }, {
    label: '新增',
    value: 0,
  }, {
    label: '删除',
    value: 1,
  }, {
    label: '修改',
    value: 2,
  }, {
    label: '查询',
    value: 3,
  }, {
    label: '登录',
    value: 4,
  }, {
    label: '退出',
    value: 5,
  }, {
    label: '导入',
    value: 6,
  }, {
    label: '导出',
    value: 7,
  }, {
    label: '上传',
    value: 8,
  }, {
    label: '下载',
    value: 9,
  }, {
    label: '其他',
    value: 10,
  },
]
