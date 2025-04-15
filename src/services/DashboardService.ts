import ApiService from './ApiService'

export async function apiGetEcommerceDashboard<T>() {
  return ApiService.fetchDataWithAxios<T>({
    url: '/mock/dashboard/ecommerce',
    method: 'get',
  })
}
