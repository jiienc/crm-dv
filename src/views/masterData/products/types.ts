export type GetProductListResponse = {
  data: Product[]
  total: number
}

export type Product = {
  name: string
  item_code: string
  item_group: string
  variant_based_on: string
  asset_category: string
}
