import ApiService from '../../ApiService'

export async function apiGetOppurtunitiesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/oppurtunities',
        method: 'get',
        params,
    })
}

export async function apiGetoppurtunities<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/oppurtunities/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetoppurtunitiesLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/oppurtunities/log`,
        method: 'get',
        params,
    })
}
