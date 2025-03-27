import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import Dropdown from '@/components/ui/Dropdown'
import type { SyntheticEvent } from 'react'

const AccessListActionTools = () => {
  const navigate = useNavigate()

  const dropdownItems = [
    { key: 'a', name: 'A' },
    { key: 'b', name: 'B' },
    { key: 'c', name: 'C' },
    { key: 'd', name: 'D' },
    { key: 'd', name: 'E' },
  ]

  const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
  }

  const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Dropdown title="Access Group" onClick={onDropdownClick}>
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
      <Button
        variant="solid"
        icon={<TbUserPlus className="text-xl" />}
        onClick={() => navigate('/concepts/users/users-create')}
      >
        Add new
      </Button>
    </div>
  )
}

export default AccessListActionTools
