export type GetSampleListResponse = {
  data: Sample[]
  total: number
}

export type Sample = {
  name: string
  status: string
}
