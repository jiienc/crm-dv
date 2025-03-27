export type GetReturnnListResponse = {
    data: Returnn[]
    total: number
  }
  
  export type Returnn = {
    name: string
    status: string
  }
  