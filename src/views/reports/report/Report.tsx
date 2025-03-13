import { useEffect, useState } from 'react'
import { apiGetLeadsList } from '@/services/reports-components/report/ReportService'

interface Lead {
  name: string
  status: string
}

const Report = () => {
  const [leads, setLeads] = useState<Lead[]>([]) // ✅ No more `any`
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await apiGetLeadsList()
        setLeads(response.data) // ✅ Properly typed
      } catch (err) {
        console.error(err)
        setError('Failed to fetch leads')
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Lead List</h2>
      <ul>
        {leads.map((lead, index) => (
          <li key={index}>
            <strong>{lead.name}</strong> - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Report
