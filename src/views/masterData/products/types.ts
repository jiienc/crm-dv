export type GetProductListResponse = {
  data: Product[]
  total: number
}

export type Product = {
  name: string
  creation: string
  item_group: string
  standard_rate: string
  stock_uom: string
}
