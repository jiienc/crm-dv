import {
    PiHouseLineDuotone,
    PiBuildingDuotone,
    PiUsersDuotone,
    PiUserDuotone,
    PiPackageDuotone,
    PiIdentificationBadgeDuotone,
    PiCalendarDotsDuotone,
    PiHandshakeDuotone,
    PiTicketDuotone,
    PiStackPlusDuotone,
    PiNotePencilDuotone,
    PiFilesDuotone,
    PiUserCircleCheckDuotone,
    PiShieldCheckeredDuotone,
} from 'react-icons/pi'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <PiHouseLineDuotone />,
    company: <PiBuildingDuotone />,
    customer: <PiUsersDuotone />,
    product: <PiPackageDuotone />,
    leads: <PiIdentificationBadgeDuotone />,
    events: <PiCalendarDotsDuotone />,
    oppurtunities: <PiHandshakeDuotone />,
    tickets: <PiTicketDuotone />,
    requests: <PiStackPlusDuotone />,
    quotes: <PiNotePencilDuotone />,
    report: <PiFilesDuotone />,
    attendance: <PiUserCircleCheckDuotone />,
    access: <PiShieldCheckeredDuotone />,
    account: <PiUserDuotone />,
}

export default navigationIcon
