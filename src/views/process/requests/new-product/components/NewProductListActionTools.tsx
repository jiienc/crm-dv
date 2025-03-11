import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useNewProductList from '../hooks/useNewProductList' 
import { CSVLink } from 'react-csv'

const NewProductListActionTools = () => {
    const navigate = useNavigate()

    const { newproductList } = useNewProductList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="newproductList.csv"
                data={newproductList}
            >
                {/* <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    Download
                </Button> */}
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
