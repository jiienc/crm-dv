import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useReturnnList from '../hooks/useReturnnList' 
import { CSVLink } from 'react-csv'

const ReturnnListActionTools = () => {
    const navigate = useNavigate()

    const { returnnList } = useReturnnList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="returnnList.csv"
                data={returnnList}
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
                onClick={() => navigate('/concepts/returnn/returnn-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default ReturnnListActionTools
