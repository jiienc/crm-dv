import { mock } from './MockAdapter'
import './fakeApi/authFakeApi'
import './fakeApi/commonFakeApi'
import './fakeApi/dashboardFakeApi'
import './fakeApi/calendarFakeApi'

mock.onAny().passThrough()
