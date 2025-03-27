import DatePicker from '@/components/ui/DatePicker'

interface ForecastSalesVolumeListActionToolsProps {
  setSelectedMonth: React.Dispatch<React.SetStateAction<Date>>
}

const ForecastSalesVolumeListActionTools: React.FC<ForecastSalesVolumeListActionToolsProps> = ({ setSelectedMonth }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <DatePicker 
        placeholder="Pick a month" 
        onChange={(date) => date && setSelectedMonth(date)} 
      />
    </div>
  )
}

export default ForecastSalesVolumeListActionTools
