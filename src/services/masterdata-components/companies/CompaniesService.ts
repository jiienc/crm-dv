import ApiService from '../../ApiService'

export async function apiGetCompaniesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/companies',
        method: 'get',
        params,
    })
}

export async function apiGetCompany<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/companies/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetCompanyLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/company/log`,
        method: 'get',
        params,
    })
}
