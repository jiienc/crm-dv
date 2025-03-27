import Dropdown from '@/components/ui/Dropdown'
import type { SyntheticEvent } from 'react'

const CollectionOutstandingListActionTools = () => {
  const dropdownItems = [
    { key: 'a', name: '<0' },
    { key: 'b', name: '>30' },
    { key: 'c', name: '>60' },
    { key: 'd', name: '>75' },
    { key: 'd', name: '>90' },
    { key: 'd', name: '>100' },
    { key: 'd', name: '>120' },
  ]

  const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
  }

  const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Dropdown title="Days Consecutive" onClick={onDropdownClick}>
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

export default CollectionOutstandingListActionTools
