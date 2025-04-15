import Card from '@/components/ui/Card'
import { useSessionUser } from '@/store/authStore'
import { useState, useEffect } from 'react'

const Welcome = () => {
  const { userName } = useSessionUser((state) => state.user)
  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formattedDateTime = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now)

      setCurrentDateTime(formattedDateTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h4>Welcome {userName || 'Anonymous'}! 👋</h4>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex flex-col">
          <p><b>{currentDateTime}</b></p>
          <div className="mt-1">You didn&apos;t checkin today, please <b>Checkin!</b></div>
          <div className="mt-1">Checkin: </div>
          <div className="mt-1">Checkout: </div>
        </div>
      </div>
    </Card>
  )
}

export default Welcome
