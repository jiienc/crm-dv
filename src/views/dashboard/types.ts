export type SalesTypes = 'all' | 'coating' | 'nonCoating'

export type SalesCategory = 'salesValue' | 'salesVolume' | 'deltaP'

export type Ticketing = {
  id: string
  name: string
  productCode: string
  created_at: string
  status: string
}

export type MeetingSchedules = {
  id: string
  name: string
  company: string
  time: string
  status: string
}

export type Leads = {
  id: string
  name: string
  date: string
  status: string
}

export type Projects = {
  id: string
  company: string
  name: string
  status: string
}

export type SalesTypesData = {
  value: number
  chartData: {
    series: {
      name: string
      data: number[]
    }[]
    date: string[]
  }
}

export type salesOverview = Record<
  SalesCategory,
  Record<SalesTypes, SalesTypesData>
>

export type Order = {
  id: string
  date: number
  customer: string
  status: number
  paymentMehod: string
  paymentIdendifier: string
  totalAmount: number
}

export type GetEcommerceDashboardResponse = {
  salesOverview: salesOverview
  recentOrders: Order[]
  ticketing: Ticketing[]
  meetingSchedules: MeetingSchedules[]
  leads: Leads[]
  projects: Projects[]
}
