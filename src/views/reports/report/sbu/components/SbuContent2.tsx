import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'

const SbuContent2 = () => {
  const data = [
    {
      name: 'Sales A',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 37, 51, 35],
    },
    {
      name: 'Sales B',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 80, 61],
    },
  ]

  return (
    <>
    <h3>Monthly Sales (USD)</h3>
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
    </>
  )
}

export default SbuContent2
