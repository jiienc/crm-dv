import { HiBuildingOffice, HiClock } from "react-icons/hi2";
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import { useNavigate } from 'react-router-dom'
import type { MeetingSchedules } from '../types'
import Tag from '@/components/ui/Tag'

type MeetingSchedulesProps = {
  data: MeetingSchedules[]
}

const MeetingSchedules = ({ data }: MeetingSchedulesProps) => {
  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate('/process/events')
  }

  const statusColor: Record<string, string> = {
    Open: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    Closed: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4>Meeting Schedules</h4>
        <Button size="sm" onClick={handleViewAll}>
          View all
        </Button>
      </div>
      <div className="mt-5">
        {data.map((meeting, index) => (
          <div
            key={meeting.id}
            className={classNames(
              'flex items-center justify-between py-2 dark:border-gray-600',
              !isLastChild(data, index) && 'mb-2',
            )}
          >
            <div className="flex items-center gap-2">
              <div>
                <div className="heading-text font-bold">{meeting.name}</div>
                <div className="flex items-center gap-1">
                  <HiBuildingOffice size={16} className="text-gray-500" />
                  <span>{meeting.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HiClock size={16} className="text-gray-500" />
                  <span>{meeting.time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className={statusColor[meeting.status]}>
                <span className="capitalize">{meeting.status}</span>
              </Tag>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default MeetingSchedules
