import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ReturnnListTable from './components/ReturnnListTable'
import ReturnnListActionTools from './components/ReturnnListActionTools'
import ReturnnListTableTools from './components/ReturnnListTableTools'
import ReturnnListSelected from './components/ReturnnListSelected'

const ReturnnList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Returnn</h3>
                            <ReturnnListActionTools />
                        </div>
                        <ReturnnListTableTools />
                        <ReturnnListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ReturnnListSelected />
        </>
    )
}

export default ReturnnList
