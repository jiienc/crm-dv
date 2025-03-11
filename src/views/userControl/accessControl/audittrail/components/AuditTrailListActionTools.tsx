import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useAuditTrailList from '../hooks/useAuditTrailList' 
import { CSVLink } from 'react-csv'

const AuditTrailListActionTools = () => {
    const navigate = useNavigate()

    const { audittrailList } = useAuditTrailList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="audittrailList.csv"
                data={audittrailList}
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
                onClick={() => navigate('/concepts/audittrail/audittrail-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default AuditTrailListActionTools
