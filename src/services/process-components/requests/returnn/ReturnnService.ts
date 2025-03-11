import ApiService from '../../../ApiService'

export async function apiGetReturnnList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/returnn',
        method: 'get',
        params,
    })
}

export async function apiGetreturnn<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/returnn/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetreturnnLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/returnn/log`,
        method: 'get',
        params,
    })
}
