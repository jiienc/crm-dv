import { HiCalendarDays } from "react-icons/hi2";
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import { useNavigate } from 'react-router-dom'
import type { Leads } from '../types'
import Tag from '@/components/ui/Tag'

type LeadsProps = {
  data: Leads[]
}

const Leads = ({ data }: LeadsProps) => {
  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate('/process/leads')
  }

  const statusColor: Record<string, string> = {
    Open: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    Closed: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4>Leads</h4>
        <Button size="sm" onClick={handleViewAll}>
          View all
        </Button>
      </div>
      <div className="mt-5">
        {data.map((lead, index) => (
          <div
            key={lead.id}
            className={classNames(
              'flex items-center justify-between py-2 dark:border-gray-600',
              !isLastChild(data, index) && 'mb-2',
            )}
          >
            <div className="flex items-center gap-2">
              <div>
                <div className="heading-text font-bold">{lead.name}</div>
                <div className="flex items-center gap-1">
                  <HiCalendarDays size={16} className="text-gray-500" />
                  <span>{lead.date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className={statusColor[lead.status]}>
                <span className="capitalize">{lead.status}</span>
              </Tag>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Leads
