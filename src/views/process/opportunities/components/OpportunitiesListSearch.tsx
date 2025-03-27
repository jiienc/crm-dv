import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'
import { Ref } from 'react'

type OpportunitiesListSearchProps = {
  onInputChange: (value: string) => void
  ref?: Ref<HTMLInputElement>
}

const OpportunitiesListSearch = (props: OpportunitiesListSearchProps) => {
  const { onInputChange, ref } = props

  return (
    <DebouceInput
      ref={ref}
      placeholder="Search..."
      suffix={<TbSearch className="text-lg" />}
      onChange={(e) => onInputChange(e.target.value)}
    />
  )
}

export default OpportunitiesListSearch
