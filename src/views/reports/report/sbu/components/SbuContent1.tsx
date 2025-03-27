import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'

const SbuContent1 = () => {
  const data = [
    {
      name: 'Sales Quantity',
      data: [31, 40, 28, 51, 42, 109, 100, 80, 95, 120, 130, 90],
    },
    {
      name: 'Sales Quality',
      data: [11, 32, 45, 32, 34, 52, 41, 60, 70, 85, 95, 75],
    },
  ]

  return (
    <>
    <h3>Sales Volume (MT)</h3>
    <Chart
      options={{
        dataLabels: {
          enabled: false,
        },
        colors: COLORS,
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'category',
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
        tooltip: {
          x: {
            format: 'MMM',
          },
        },
      }}
      series={data}
      type="area"
      height={300}
    />
    </>
  )
}

export default SbuContent1
