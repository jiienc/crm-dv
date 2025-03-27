import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useReturnnList from '../hooks/useReturnnList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const ReturnnListActionTools = () => {
  const navigate = useNavigate()

  const { returnnList } = useReturnnList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Return Request Date" />
      <CSVLink className="w-full" filename="returnnList.csv" data={returnnList}>
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
        onClick={() => navigate('/concepts/returnn/returnn-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default ReturnnListActionTools
