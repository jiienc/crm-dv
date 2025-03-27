import ApiService from '../../ApiService'

export async function apiGetCompanyList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Company',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
