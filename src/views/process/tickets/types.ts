export type GetTicketsListResponse = {
  data: Tickets[]
  total: number
}

export type Tickets = {
  name: string
  status: string
}
