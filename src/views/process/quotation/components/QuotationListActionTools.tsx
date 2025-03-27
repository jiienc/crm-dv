import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useQuotationList from '../hooks/useQuotationList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const QuotationListActionTools = () => {
  const navigate = useNavigate()

  const { quotationList } = useQuotationList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Quotation Date" />
      <CSVLink
        className="w-full"
        filename="quotationList.csv"
        data={quotationList}
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
        onClick={() => navigate('/concepts/quotation/quotation-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default QuotationListActionTools
