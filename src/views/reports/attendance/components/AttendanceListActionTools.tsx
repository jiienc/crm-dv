import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useAttendanceList from '../hooks/useAttendanceList'
import { CSVLink } from 'react-csv'
import DatePicker from '@/components/ui/DatePicker'

const AttendanceListActionTools = () => {
  const navigate = useNavigate()

  const { attendanceList } = useAttendanceList()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Attendance Date" />
      <CSVLink
        className="w-full"
        filename="attendanceList.csv"
        data={attendanceList}
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
        onClick={() => navigate('/concepts/attendance/attendance-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default AttendanceListActionTools
