import Button from '@/components/ui/Button'
import { TbUserPlus, TbCloudDownload } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useOpportunitiesList from '../hooks/useOpportunitiesList'
import { CSVLink } from 'react-csv'

const OpportunitiesListActionTools = () => {
  const navigate = useNavigate()

  const { opportunitiesList } = useOpportunitiesList()

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <CSVLink
        className="w-full"
        filename="oppurtunitiesList.csv"
        data={opportunitiesList}
      >
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
        onClick={() => navigate('/concepts/oppurtunities/oppurtunities-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default OpportunitiesListActionTools
