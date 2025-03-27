import ApiService from '../../../ApiService'

export async function apiGetSampleList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Sample',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
