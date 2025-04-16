import ApiService from '../../ApiService'

export async function apiGetCustomerList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Customer',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}

export async function apiGetCustomer<T, U extends Record<string, unknown>>({
  id,
  ...params
}: U) {
  return ApiService.fetchDataWithAxios<T>({
      url: `/resource/Customer/${id}`,
      method: 'get',
      params,
  })
}

export async function apiGetBilling<T, U extends Record<string, unknown>>({
  id,
  ...params
}: U) {
  return ApiService.fetchDataWithAxios<T>({
      url: `/resource/Address/${id}-Billing`,
      method: 'get',
      params,
  })
}

export async function apiGetShipping<T, U extends Record<string, unknown>>({
  id,
  ...params
}: U) {
  return ApiService.fetchDataWithAxios<T>({
      url: `/resource/Address/${id}-Shipping`,
      method: 'get',
      params,
  })
}
