import Card from '@/components/ui/Card'
import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'

const TopProduct = () => {
  const categories = [
    'EBL 7853 RJ',
    'EBA 1481-70',
    'EBA 1365-60 HV',
    'ACR 7111-50',
    'EBP 2022 LS',
  ]

  const data = [
    {
      name: 'Price',
      data: [31, 40, 28, 51, 42],
    },
    {
      name: 'Units Sold',
      data: [11, 32, 45, 32, 34],
    }
  ]

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h4>Top Product</h4>
      </div>
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
          },
          xaxis: {
            type: 'category',
            categories: categories,
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: (val) => `$${val} thousands`,
            },
          },
        }}
        series={data}
        height={300}
        type="bar"
      />
    </Card>
  )
}

export default TopProduct
