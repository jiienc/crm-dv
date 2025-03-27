import ApiService from '../../ApiService'

export async function apiGetUsersList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/User',
    method: 'get',
    params: {
        fields: JSON.stringify(['*']),
        ...params,
      },
  })
}
