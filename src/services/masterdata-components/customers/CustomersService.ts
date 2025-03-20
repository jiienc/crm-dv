import ApiService from '../../ApiService'

interface Customer {
  name: string
  customer_name: string
  primary_address: string
}

interface CustomerResponse {
  data: Customer[]
}

export async function apiGetCustomerList<
  U extends Record<string, unknown> = Record<string, unknown>,
>(params?: U): Promise<CustomerResponse> {
  return ApiService.fetchDataWithAxios<CustomerResponse>({
    url: '/resource/Customer',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
