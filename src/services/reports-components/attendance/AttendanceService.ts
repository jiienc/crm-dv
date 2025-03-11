import ApiService from '../../ApiService'

export async function apiGetAttendanceList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/attendance',
        method: 'get',
        params,
    })
}

export async function apiGetattendance<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/attendance/${id}`,
        method: 'get',
        params,
    })
}

export async function apiGetattendanceLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/attendance/log`,
        method: 'get',
        params,
    })
}
