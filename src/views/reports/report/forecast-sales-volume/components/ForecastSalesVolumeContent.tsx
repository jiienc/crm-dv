import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'
import { format } from 'date-fns'

interface ForecastSalesVolumeContentProps {
  selectedMonth: Date
}

const ForecastSalesVolumeContent: React.FC<ForecastSalesVolumeContentProps> = ({ selectedMonth }) => {
  const formattedMonth = format(selectedMonth, 'MMMM yyyy')
  const nextMonth = format(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 1), 'MMMM yyyy')

  const data = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ]

  return (
    <Chart
      options={{
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 4,
          },
        },
        colors: COLORS,
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            formattedMonth,
            `Forecast ${formattedMonth}`, 
            `Budget ${formattedMonth}`,
            `Forecast ${nextMonth}`,
            `Budget ${nextMonth}`,
          ],
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: (val: number) => `$${val} thousands`,
          },
        },
      }}
      series={data}
      height={300}
      type="bar"
    />
  )
}

export default ForecastSalesVolumeContent
