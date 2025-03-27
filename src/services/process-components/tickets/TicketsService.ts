import ApiService from '../../ApiService'

export async function apiGetTicketsList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Ticket',
    method: 'get',
    params,
  })
}
