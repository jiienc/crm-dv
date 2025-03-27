import Table from '@/components/ui/Table'
import { format } from 'date-fns'

const { Tr, Th, Td, THead, TBody } = Table

const totalOpportunities = [8, 1, 4]
const potentialVolume = [3445, 15, 35]
const potentialRevenue = [73443, 1500, 2500]
const realizedVolume = [1356.95, 0, 0]
const realizedRevenue = [1322393.42, 0, 0]

interface SplContentProps {
  selectedMonth: Date
}

const SplTable1: React.FC<SplContentProps> = ({ selectedMonth }) => {
  if (!selectedMonth || !(selectedMonth instanceof Date)) {
    return <p>Invalid date</p>
  }

  const formattedMonth = format(selectedMonth, 'MMMM yyyy')
  const aMonth = format(
    new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 2, 1),
    'MMMM yyyy'
  )
  const bMonth = format(
    new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1, 1),
    'MMMM yyyy'
  )

  return (
    <div>
      <Table compact>
        <THead>
          <Tr>
            <Th>Closing On</Th>
            <Th>{aMonth}</Th>
            <Th>{bMonth}</Th>
            <Th>{formattedMonth}</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Total Opportunity</Td>
            {totalOpportunities.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Potential Volume (MT)</Td>
            {potentialVolume.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Potential Revenue (USD)</Td>
            {potentialRevenue.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Realized Volume (MT)</Td>
            {realizedVolume.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Realized Revenue (USD)</Td>
            {realizedRevenue.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
        </TBody>
      </Table>
    </div>
  )
}

export default SplTable1
