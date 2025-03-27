export type GetAccessListResponse = {
  data: Access[]
}

export type Access = {
  menu: string
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
  print: boolean
  approve: boolean
}
