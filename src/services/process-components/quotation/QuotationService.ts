import ApiService from '../../ApiService'

export async function apiGetQuotationList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Quotation',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}
