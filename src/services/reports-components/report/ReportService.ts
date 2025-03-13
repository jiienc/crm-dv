import ApiService from '../../ApiService'

interface Lead {
  name: string
  status: string
}

interface LeadsResponse {
  data: Lead[]
}

export async function apiGetLeadsList<U extends Record<string, unknown> = Record<string, unknown>>(
  params?: U
): Promise<LeadsResponse> {
  return ApiService.fetchDataWithAxios<LeadsResponse>({
      url: "/resource/Lead",
      method: "get",
      params: {
        fields: JSON.stringify(["*"]), // Request all fields
        ...params, // Include any additional parameters
    },
  })
}
