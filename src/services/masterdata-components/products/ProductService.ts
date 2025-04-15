import ApiService from '../../ApiService'

export async function apiGetProductList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Item',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}

export async function apiGetProduct<T, U extends Record<string, unknown>>({
  id,
  ...params
}: U) {
  return ApiService.fetchDataWithAxios<T>({
      url: `/resource/Item/${id}`,
      method: 'get',
      params,
  })
}

export async function apiGetItemGroup<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Item Group',
    method: 'get',
    params,
  })
}

export async function apiUpdateItemGroup<T>(
  id: string,
  payload: Record<string, unknown>
) {
  return ApiService.fetchDataWithAxios<T>({
    url: `/resource/Item/${id}`,
    method: 'put',
    data: payload,
  })
}
