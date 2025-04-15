export type GetCustomerListResponse = {
  data: Customer[]
  total: number
}

export type Customer = {
  name: string
  customer_name: string
  primary_address: string
  creation: string
}
