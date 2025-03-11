import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import OppurtunitiesListTable from './components/OppurtunitiesListTable'
import OppurtunitiesListActionTools from './components/OppurtunitiesListActionTools'
import OppurtunitiesListTableTools from './components/OppurtunitiesListTableTools'
import OppurtunitiesListSelected from './components/OppurtunitiesListSelected'

const OppurtunitiesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Oppurtunities</h3>
                            <OppurtunitiesListActionTools />
                        </div>
                        <OppurtunitiesListTableTools />
                        <OppurtunitiesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <OppurtunitiesListSelected />
        </>
    )
}

export default OppurtunitiesList
