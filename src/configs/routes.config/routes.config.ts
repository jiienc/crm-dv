import authRoute from './authRoute'
import dashboardRoute from './dashboardRoute'
import masterdataRoute from './masterdataRoute'
import processRoute from './processRoute'
import reportsRoute from './reportsRoute'
import userControlRoute from './userControlRoute'
import accountRoute from './accountRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
  ...dashboardRoute,
  ...masterdataRoute,
  ...processRoute,
  ...reportsRoute,
  ...userControlRoute,
  ...accountRoute,
  ...othersRoute,
]
