import ApiService from '../../ApiService'

export async function apiGetOpportunitiesList<T, U extends Record<string, unknown>>(
    params: U,
  ) {
    return ApiService.fetchDataWithAxios<T>({
      url: '/resource/Opportunity',
      method: 'get',
      params: {
        fields: JSON.stringify(['*']),
        ...params,
      },
    })
  }
