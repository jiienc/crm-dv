import ApiService from '../../../ApiService'

export async function apiGetNewProductList<
  T,
  U extends Record<string, unknown>,
>(params: U) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/NewProduct',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
