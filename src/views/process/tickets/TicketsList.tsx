import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import TicketsListTable from './components/TicketsListTable'
import TicketsListActionTools from './components/TicketsListActionTools'
import TicketsListTableTools from './components/TicketsListTableTools'
import TicketsListSelected from './components/TicketsListSelected'

const TicketsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Tickets</h3>
                            <TicketsListActionTools />
                        </div>
                        <TicketsListTableTools />
                        <TicketsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <TicketsListSelected />
        </>
    )
}

export default TicketsList
