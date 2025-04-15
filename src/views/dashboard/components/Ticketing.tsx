import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import { useNavigate } from 'react-router-dom'
import type { Ticketing } from '../types'
import Tag from '@/components/ui/Tag'

type TicketingProps = {
  data: Ticketing[]
}

const Ticketing = ({ data }: TicketingProps) => {
  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate('/process/tickets')
  }

  const statusColor: Record<string, string> = {
    Open: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    Closed: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4>Ticketing</h4>
        <Button size="sm" onClick={handleViewAll}>
          View all
        </Button>
      </div>
      <div className="mt-5">
        {data.map((ticketing, index) => (
          <div
            key={ticketing.id}
            className={classNames(
              'flex items-center justify-between py-2 dark:border-gray-600',
              !isLastChild(data, index) && 'mb-2',
            )}
          >
            <div className="flex items-center gap-2">
              <div>
                <div className="heading-text font-bold">{ticketing.name}</div>
                <div>Product Code: {ticketing.productCode}</div>
                <div>Created at: {ticketing.created_at}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className={statusColor[ticketing.status]}>
                <span className="capitalize">{ticketing.status}</span>
              </Tag>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Ticketing
