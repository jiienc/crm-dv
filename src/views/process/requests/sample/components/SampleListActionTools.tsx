import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useSampleList from '../hooks/useSampleList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const SampleListActionTools = () => {
  const navigate = useNavigate()

  const { sampleList } = useSampleList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Sample Request Date" />
      <CSVLink className="w-full" filename="sampleList.csv" data={sampleList}>
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
        onClick={() => navigate('/concepts/sample/sample-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default SampleListActionTools
