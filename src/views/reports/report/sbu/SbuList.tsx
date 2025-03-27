import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import SbuListActionTools from './components/SbuListActionTools'
import SbuContent1 from './components/SbuContent1'
import SbuContent2 from './components/SbuContent2'
import SbuContent3 from './components/SbuContent3'
import SbuContent4 from './components/SbuContent4'

const SbuList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>SBU Monthly</h3>
              <SbuListActionTools />
            </div>
            <SbuContent1 />
            <SbuContent2 />
            <SbuContent3 />
            <SbuContent4 />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default SbuList
