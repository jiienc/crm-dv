export type Profile = {
  id: number
  name: string
  role: string
  profiles?: Profile[]
}

export type ProfileListProps = {
  profiles: Profile[]
}

export type PseudoBorderProps = {
  className?: string
  mTop?: string
  bTop?: boolean
  wfull?: boolean
}
