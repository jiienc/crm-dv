export type GetProductListResponse = {
  data: Product[]
  total: number
}

export type Product = {
  name: string
  item_code: string
  item_group: string
}
