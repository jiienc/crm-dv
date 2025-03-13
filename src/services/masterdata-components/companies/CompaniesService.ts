import ApiService from '../../ApiService'

interface Company {
    name: string
    company_name: string
    phone_no: string
    email: string
}

interface CompanyResponse {
  data: Company[]
}

export async function apiGetCompanyList<
  U extends Record<string, unknown> = Record<string, unknown>,
>(params?: U): Promise<CompanyResponse> {
  return ApiService.fetchDataWithAxios<CompanyResponse>({
    url: '/resource/Company',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
