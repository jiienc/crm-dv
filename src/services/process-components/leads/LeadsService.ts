import ApiService from '../../ApiService'

export async function apiGetLeadsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/leads',
        method: 'get',
        params,
    })
}

export async function apiGetleads<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/leads/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetleadsLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/leads/log`,
        method: 'get',
        params,
    })
}
