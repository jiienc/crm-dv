import Button from '@/components/ui/Button'
// import { TbCloudDownload } from 'react-icons/tb'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useAttendanceList from '../hooks/useAttendanceList' 
import { CSVLink } from 'react-csv'

const AttendanceListActionTools = () => {
    const navigate = useNavigate()

    const { attendanceList } = useAttendanceList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="attendanceList.csv"
                data={attendanceList}
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
                onClick={() => navigate('/concepts/attendance/attendance-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default AttendanceListActionTools
