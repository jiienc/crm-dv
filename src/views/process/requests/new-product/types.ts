export type GetNewProductListResponse = {
  data: NewProduct[]
  total: number
}

export type NewProduct = {
  name: string
  status: string
}
