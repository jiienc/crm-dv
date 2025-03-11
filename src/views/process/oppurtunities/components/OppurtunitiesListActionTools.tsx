import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useOppurtunitiesList from '../hooks/useOppurtunitiesList' 
import { CSVLink } from 'react-csv'

const OppurtunitiesListActionTools = () => {
    const navigate = useNavigate()

    const { oppurtunitiesList } = useOppurtunitiesList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="oppurtunitiesList.csv"
                data={oppurtunitiesList}
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
                onClick={() => navigate('/concepts/oppurtunities/oppurtunities-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default OppurtunitiesListActionTools
