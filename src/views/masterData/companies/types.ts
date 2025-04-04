export type GetCompanyListResponse = {
  data: Company[]
  total: number
}

export type Company = {
  name: string
  company_name: string
  phone_no: string
  email: string
}
