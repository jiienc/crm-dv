import Chart from 'react-apexcharts'
import { COLOR_2 } from '@/constants/chart.constant'

const Sample = () => {
  const data = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]

  return (
    <Chart
      options={{
        chart: {
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        colors: [COLOR_2],
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
        },
      }}
      series={data}
      height={300}
    />
  )
}

export default Sample

// import Chart from 'react-apexcharts'
// import { COLORS } from '@/constants/chart.constant'

// const Sample = () => {
//   return (
//     <Chart
//       options={{
//         colors: COLORS,
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: 'bottom',
//               },
//             },
//           },
//         ],
//       }}
//       series={[44, 55, 41, 17, 15]}
//       height={300}
//       type="donut"
//     />
//   )
// }

// export default Sample
