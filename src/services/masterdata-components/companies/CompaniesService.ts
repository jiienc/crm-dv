import ApiService from '../../ApiService'

export async function apiGetCompanyList<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Company',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}

export async function apiGetAssigned<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/ToDo',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}

export async function apiGetAllContact<T, U extends Record<string, unknown>>(
  params: U,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Contact',
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}

export async function apiGetLinked<T, U extends Record<string, unknown>>(
  params: U,
  contact: string,
) {
  return ApiService.fetchDataWithAxios<T>({
    url: '/resource/Contact' + '/' + contact,
    method: 'get',
    params: {
      fields: JSON.stringify(['*']),
      ...params,
    },
  })
}