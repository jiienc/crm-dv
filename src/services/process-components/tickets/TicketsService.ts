import ApiService from '../../ApiService'

export async function apiGetTicketsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/tickets',
        method: 'get',
        params,
    })
}

export async function apiGettickets<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/tickets/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetticketsLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/tickets/log`,
        method: 'get',
        params,
    })
}
