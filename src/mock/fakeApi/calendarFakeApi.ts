import { mock } from '../MockAdapter'
import { calendarData } from '../data/calendarData'

mock.onGet(`/mock/calendar`).reply(() => {
    return [200, calendarData]
})
