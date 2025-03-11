import ApiService from '../../../ApiService'

export async function apiGetProductImprovementList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/productimprovement',
        method: 'get',
        params,
    })
}

export async function apiGetproductimprovement<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/productimprovement/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetproductimprovementLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/productimprovement/log`,
        method: 'get',
        params,
    })
}
