export type GetUsersListResponse = {
  data: Users[]
  total: number
}

export type Users = {
  name: string
  username: string
  email: string
  phone: string
  full_name: string
  role_profile_name: string
}
