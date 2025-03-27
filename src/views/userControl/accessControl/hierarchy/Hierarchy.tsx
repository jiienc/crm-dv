import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import React from 'react'
import ProfileCard from './components/ProfileCard'
import profiles from './data.json'

const Hierarchy: React.FC = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Hierarchy</h3>
            </div>
            <div className="container mx-auto text-center pt-32">
              <div className="items-center justify-center flex">
                {profiles &&
                  profiles.map((profile, idX) => (
                    <ProfileCard key={idX} {...profile} />
                  ))}
              </div>
            </div>
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default Hierarchy
