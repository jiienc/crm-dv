import ApiService from '../../../ApiService'

export async function apiGetProductImprovementList<
  T,
  U extends Record<string, unknown>,
>(params: U) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/ProductImprovement',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
