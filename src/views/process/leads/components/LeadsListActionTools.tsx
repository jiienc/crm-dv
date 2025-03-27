import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useLeadsList from '../hooks/useLeadsList'
import { CSVLink } from 'react-csv'

const LeadsListActionTools = () => {
  const navigate = useNavigate()

  const { leadsList } = useLeadsList()

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <CSVLink className="w-full" filename="leadsList.csv" data={leadsList}>
        <Button
          icon={<TbCloudDownload className="text-xl" />}
          className="w-full"
        >
          Download
        </Button>
      </CSVLink>
      <Button
        variant="solid"
        icon={<TbUserPlus className="text-xl" />}
        onClick={() => navigate('/concepts/leads/leads-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default LeadsListActionTools
