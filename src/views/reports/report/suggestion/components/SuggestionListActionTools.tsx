import Dropdown from '@/components/ui/Dropdown'
import type { SyntheticEvent } from 'react'
import DatePicker from '@/components/ui/DatePicker'

const SuggestionListActionTools = () => {
  const dropdownItems = [
    { key: 'a', name: 'All' },
    { key: 'b', name: 'Coating' },
    { key: 'c', name: 'Non-coating' }
  ]

  const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
  }

  const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
  }

  const { DatePickerRange } = DatePicker

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Dropdown title="Product" onClick={onDropdownClick}>
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
      <DatePickerRange placeholder="Select Range" />
    </div>
  )
}

export default SuggestionListActionTools
