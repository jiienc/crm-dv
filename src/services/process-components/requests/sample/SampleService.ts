import ApiService from '../../../ApiService'

export async function apiGetSampleList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/sample',
        method: 'get',
        params,
    })
}

export async function apiGetsample<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/sample/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetsampleLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/sample/log`,
        method: 'get',
        params,
    })
}
