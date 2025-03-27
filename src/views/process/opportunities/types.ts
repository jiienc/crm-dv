export type GetOpportunitiesListResponse = {
  data: Opportunities[]
  total: number
}

export type Opportunities = {
  name: string
  company: string
  sales_stage: string
  opportunity_type: string
  status: string
}
