import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import UsersListTable from './components/AccessListTable'
import UsersListActionTools from './components/AccessListActionTools'

const UsersList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Access</h3>
              <UsersListActionTools />
            </div>
            <UsersListTable />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default UsersList
