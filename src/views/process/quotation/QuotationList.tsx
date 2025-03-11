import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import QuotationListTable from './components/QuotationListTable'
import QuotationListActionTools from './components/QuotationListActionTools'
import QuotationListTableTools from './components/QuotationListTableTools'
import QuotationListSelected from './components/QuotationListSelected'

const QuotationList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Quotation</h3>
                            <QuotationListActionTools />
                        </div>
                        <QuotationListTableTools />
                        <QuotationListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <QuotationListSelected />
        </>
    )
}

export default QuotationList
