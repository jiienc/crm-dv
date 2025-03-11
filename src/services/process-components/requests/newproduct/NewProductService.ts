import ApiService from '../../../ApiService'

export async function apiGetNewProductList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/newproduct',
        method: 'get',
        params,
    })
}

export async function apiGetnewproduct<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/newproduct/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetnewproductLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/newproduct/log`,
        method: 'get',
        params,
    })
}
