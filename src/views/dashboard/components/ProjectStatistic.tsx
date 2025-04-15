import Card from '@/components/ui/Card'
import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'

const ProjectStatistic = () => {
  const categories = [
    'None (0%)',
    'Cancelled (0%)',
    'Closed Lost (0%)',
    'Opportunity Scouting (25%)',
    'Solution Setup (50%)',
    'Negotiation of Deal (75%)',
    'Order Processing (90%)',
    'Closed Won (100%)',
  ]

  // Helper to get month names
  const getMonthLabel = (offset: number) => {
    const date = new Date()
    date.setMonth(date.getMonth() - offset)
    return date.toLocaleString('default', { month: 'long', year: 'numeric' })
  }

  const data = [
    {
      name: getMonthLabel(2),
      data: [31, 40, 28, 51, 42, 109, 100, 0],
    },
    {
      name: getMonthLabel(1),
      data: [11, 32, 45, 32, 34, 52, 41, 0],
    },
    {
      name: getMonthLabel(0),
      data: [14, 37, 42, 39, 33, 58, 49, 0],
    },
  ]

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h4>Project Statistic Monthly</h4>
      </div>
      <Chart
        options={{
          chart: {
            id: 'project-statistic',
          },
          dataLabels: {
            enabled: false,
          },
          colors: COLORS,
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'category',
            categories: categories,
          },
          tooltip: {
            x: {
              show: true,
            },
          },
        }}
        series={data}
        type="area"
        height={300}
      />
    </Card>
  )
}

export default ProjectStatistic
