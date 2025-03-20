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
