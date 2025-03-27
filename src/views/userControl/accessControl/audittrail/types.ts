export type GetAuditTrailListResponse = {
  data: AuditTrail[]
  total: number
}

export type AuditTrail = {
  name: string
}
