import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AuditTrailListTable from './components/AuditTrailListTable'
import AuditTrailListActionTools from './components/AuditTrailListActionTools'
import AuditTrailListTableTools from './components/AuditTrailListTableTools'
import AuditTrailListSelected from './components/AuditTrailListSelected'

const AuditTrailList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>AuditTrail</h3>
                            <AuditTrailListActionTools />
                        </div>
                        <AuditTrailListTableTools />
                        <AuditTrailListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AuditTrailListSelected />
        </>
    )
}

export default AuditTrailList
