import Chart from 'react-apexcharts'
import { COLORS } from '@/constants/chart.constant'

const SuggestionContent = () => {
  const data = [
    {
      name: 'Sales',
      data: [
        [1, 10], [2, 40], [3, 35], [4, 50], [5, 49], [6, 60], [7, 70], [8, 91]
      ],
    },
  ]

  return (
    <Chart
      options={{
        chart: {
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy',
          },
        },
        markers: {
          size: 15,
          colors: COLORS,
          strokeWidth: 0,
        },
        xaxis: {
          title: { text: 'Sales Volume (Ton)' },
        },
        yaxis: {
          title: { text: 'Delta P (USD)' },
        },
      }}
      series={data}
      type="scatter"
      height={300}
    />
  )
}

export default SuggestionContent