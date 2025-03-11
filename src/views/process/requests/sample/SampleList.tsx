import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import SampleListTable from './components/SampleListTable'
import SampleListActionTools from './components/SampleListActionTools'
import SampleListTableTools from './components/SampleListTableTools'
import SampleListSelected from './components/SampleListSelected'

const SampleList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Sample</h3>
                            <SampleListActionTools />
                        </div>
                        <SampleListTableTools />
                        <SampleListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <SampleListSelected />
        </>
    )
}

export default SampleList
