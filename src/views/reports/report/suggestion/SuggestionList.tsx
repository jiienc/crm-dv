import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import SuggestionListActionTools from './components/SuggestionListActionTools'
import SuggestionAllContent from './components/SuggestionAllContent'

const SuggestionList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Account Suggestion</h3>
              <SuggestionListActionTools />
            </div>
            <SuggestionAllContent />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default SuggestionList