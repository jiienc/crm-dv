import ApiService from '../../ApiService'

export async function apiGetUsersList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/users',
        method: 'get',
        params,
    })
}

export async function apiGetusers<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/users/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetusersLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/users/log`,
        method: 'get',
        params,
    })
}
