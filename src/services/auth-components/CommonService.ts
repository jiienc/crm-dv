import ApiService from './ApiService'

export async function apiGetNotificationCount() {
  return ApiService.fetchDataWithAxios<{
    count: number
  }>({
    url: '/mock/notification/count',
    method: 'get',
  })
}

export async function apiGetNotificationList() {
  return ApiService.fetchDataWithAxios<
    {
      id: string
      target: string
      description: string
      date: string
      image: string
      type: number
      location: string
      locationLabel: string
      status: string
      readed: boolean
    }[]
  >({
    url: '/mock/notification/list',
    method: 'get',
  })
}

export async function apiGetSearchResult<T>(params: { query: string }) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/mock/search/query',
    method: 'get',
    params,
  })
}
