import ApiService from '../../ApiService'

export async function apiGetAuditTrailList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/audittrail',
        method: 'get',
        params,
    })
}

export async function apiGetaudittrail<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/audittrail/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetaudittrailLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/audittrail/log`,
        method: 'get',
        params,
    })
}
