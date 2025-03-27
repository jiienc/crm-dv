// import Button from '@/components/ui/Button'
// import { TbUserPlus } from 'react-icons/tb'
// import { useNavigate } from 'react-router-dom'
import DatePicker from '@/components/ui/DatePicker'

const AuditTrailListActionTools = () => {
  // const navigate = useNavigate()

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePickerRange placeholder="Audit Trail Date" />
      {/* <Button
        variant="solid"
        icon={<TbUserPlus className="text-xl" />}
        onClick={() => navigate('/concepts/audittrail/audittrail-create')}
      >
        Add new
      </Button> */}
    </div>
  )
}

export default AuditTrailListActionTools
