import Dropdown from '@/components/ui/Dropdown'
import type { SyntheticEvent } from 'react'

const CustomerJourneyListActionTools = () => {
  const dropdownItems = [
    { key: 'a', name: 'A' },
    { key: 'b', name: 'B' },
    { key: 'c', name: 'C' }
  ]

  const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
  }

  const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Dropdown title="Customer" onClick={onDropdownClick}>
        {dropdownItems.map((item) => (
          <Dropdown.Item
            key={item.key}
            eventKey={item.key}
            onSelect={onDropdownItemClick}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  )
}

export default CustomerJourneyListActionTools
