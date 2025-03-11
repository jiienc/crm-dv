import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useSampleList from '../hooks/useSampleList' 
import { CSVLink } from 'react-csv'

const SampleListActionTools = () => {
    const navigate = useNavigate()

    const { sampleList } = useSampleList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="sampleList.csv"
                data={sampleList}
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
                onClick={() => navigate('/concepts/sample/sample-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default SampleListActionTools
