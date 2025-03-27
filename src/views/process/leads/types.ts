export type GetLeadsListResponse = {
  data: Leads[]
  total: number
}

export type Leads = {
  name: string
  company_name: string
  phone: string
  status: string
  customer: string
  lead_owner: string
}
