import ApiService from '../../ApiService'

interface Lead {
  name: string
  title: string
  status: string
}

interface LeadsResponse {
  data: Lead[]
}

export async function apiGetLeadsList<
  U extends Record<string, unknown> = Record<string, unknown>,
>(params?: U): Promise<LeadsResponse> {
  return ApiService.fetchDataWithAxios<LeadsResponse>({
    url: '/resource/Lead',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
