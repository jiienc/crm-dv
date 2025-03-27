import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useProductImprovementList from '../hooks/useProductImprovementList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const ProductImprovementListActionTools = () => {
  const navigate = useNavigate()

  const { productimprovementList } = useProductImprovementList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Product Improvement Request Date" />
      <CSVLink
        className="w-full"
        filename="productimprovementList.csv"
        data={productimprovementList}
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
        onClick={() =>
          navigate('/concepts/productimprovement/productimprovement-create')
        }
      >
        Add new
      </Button>
    </div>
  )
}

export default ProductImprovementListActionTools
