import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useNewProductList from '../hooks/useNewProductList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const NewProductListActionTools = () => {
  const navigate = useNavigate()

  const { newproductList } = useNewProductList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="New Product Request Date" />
      <CSVLink
        className="w-full"
        filename="newproductList.csv"
        data={newproductList}
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
        onClick={() => navigate('/concepts/newproduct/newproduct-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default NewProductListActionTools
