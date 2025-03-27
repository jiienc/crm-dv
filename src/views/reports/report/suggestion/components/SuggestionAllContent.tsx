import SuggestionContent from './SuggestionContent'

const SuggestionAllContent = () => {
  const charts = [
    { title: 'Key Development Account' },
    { title: 'Key Account' },
    { title: 'Opportunistic Account' },
    { title: 'Maintained Account' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {charts.map((chart, index) => (
        <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
          <h4 className="text-lg font-semibold mb-2">{chart.title}</h4>
          <SuggestionContent />
        </div>
      ))}
    </div>
  )
}

export default SuggestionAllContent
