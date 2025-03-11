import ApiService from '../../ApiService'

export async function apiGetQuotationList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/quotation',
        method: 'get',
        params,
    })
}

export async function apiGetquotation<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/quotation/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetquotationLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/quotation/log`,
        method: 'get',
        params,
    })
}
