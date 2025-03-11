import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'
import { Ref } from 'react'

type AuditTrailListSearchProps = {
    onInputChange: (value: string) => void
    ref?: Ref<HTMLInputElement>
}

const AuditTrailListSearch = (props: AuditTrailListSearchProps) => {
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

export default AuditTrailListSearch
