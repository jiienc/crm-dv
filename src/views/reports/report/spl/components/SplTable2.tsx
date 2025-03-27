import Table from '@/components/ui/Table'
import { format } from 'date-fns'

const { Tr, Th, Td, THead, TBody } = Table

const createdDeals = [8, 1, 4]
const none = [3445, 15, 35]
const opportunityScouting = [73443, 1500, 2500]
const solutionSetup = [1356.95, 0, 0]
const negotiationDeal = [1322393.42, 0, 0]
const orderProcessing = [54, 0, 4]
const closedWon = [8, 1, 4]
const closedLost = [3445, 15, 35]
const cancelled = [73443, 1500, 2500]
const potentialVolume = [1356.95, 0, 0]
const potentialRevenue = [1322393.42, 0, 0]
const realizedVolume = [54, 756, 456]
const realizedRevenue = [456, 5, 5346]

interface SplContentProps {
  selectedMonth: Date
}

const SplTable2: React.FC<SplContentProps> = ({ selectedMonth }) => {
  if (!selectedMonth || !(selectedMonth instanceof Date)) {
    return <p>Invalid date</p>
  }

  const formattedMonth = format(selectedMonth, 'MMMM yyyy')
  const aMonth = format(
    new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 2, 1),
    'MMMM yyyy',
  )
  const bMonth = format(
    new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1, 1),
    'MMMM yyyy',
  )

  return (
    <div>
      <h4>Coating</h4>
      <Table compact>
        <THead>
          <Tr>
            <Th>Deal Stage</Th>
            <Th>{aMonth}</Th>
            <Th>{bMonth}</Th>
            <Th>{formattedMonth}</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Created of Deals</Td>
            {createdDeals.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>None (0%)</Td>
            {none.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Opportunity Scouting (25%)</Td>
            {opportunityScouting.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Solution Setup (50%)</Td>
            {solutionSetup.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Negotiation of Deal (75%)</Td>
            {negotiationDeal.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Order Processing (90%)</Td>
            {orderProcessing.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Closed Won (100%)</Td>
            {closedWon.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Closed Lost (0%)</Td>
            {closedLost.map((num, index) => (
              <Td key={index}>{num}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Cancelled (0%)</Td>
            {cancelled.map((num, index) => (
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

export default SplTable2
