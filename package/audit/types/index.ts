export interface NodeParma {
  id: string
  hasChild: number
}

export interface AuditParma {
  id: number
  orderNo?: number
  operUserName: string
  operUserId: string
  operProject: string
  operUri: string
  operType: string
  operDesc: string
  operResult: string | number
  excMessage: string
  operCreateTime: string
  operIp: string
  operRequParam: string
  operModul: string
  operTypeName: string
  operResultName: string
  time: string
}

export interface PropsParam {
  label: string
  value: string | number
}

export interface ColumnParam {
  prop: string
  label: string
  slot?: string
  width?: string | number
  align?: string | number
  fixed?: string | number
}

export interface AuditDialogParma {
  onCloseModal: () => void
  openModal: (arg: string | AuditParma) => void
  getDetail?: () => Promise<void>
}
