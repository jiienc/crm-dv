import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AttendanceListTable from './components/AttendanceListTable'
import AttendanceListActionTools from './components/AttendanceListActionTools'

const CollectionOutstandingList = () => {
  const date = new Date();
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(date.getFullYear(), date.getMonth() - 1));
  const year = date.getFullYear();

  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Collection Outstanding ({month} {year})</h3>
              <AttendanceListActionTools />
            </div>
            <AttendanceListTable />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default CollectionOutstandingList
