import Card from '@/components/ui/Card'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps, AllItemGroupResponse } from './types'
import Select from '@/components/ui/Select'
import CreatableSelect from 'react-select/creatable'
import useSWR from 'swr'
import { apiGetItemGroup } from '@/services/masterdata-components/products/ProductService'

type OverviewSectionProps = FormSectionBaseProps

const OverviewSection = ({ control, errors }: OverviewSectionProps) => {
  const { data: allItemGroup } = useSWR<
    AllItemGroupResponse,
    unknown,
    [string, Record<string, unknown>]
  >(['/resource/Item Group', {}], ([, params]) => apiGetItemGroup(params), {
    revalidateOnFocus: false,
  })

  const itemGroupOptions =
    allItemGroup?.data?.map((group) => ({
      value: group.name,
      label: group.name,
    })) ?? []

  return (
    <Card>
      <h4 className="mb-6">Category Product Edit</h4>
      <FormItem
        label="MNF Code"
        invalid={Boolean(errors.name)}
        errorMessage={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <p className="text-sm text-gray-800">{field.value}</p>
          )}
        />
      </FormItem>
      <FormItem
        label="Product Code"
        invalid={Boolean(errors.name)}
        errorMessage={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <p className="text-sm text-gray-800">{field.value}</p>
          )}
        />
      </FormItem>
      <FormItem
        label="COGS"
        invalid={Boolean(errors.name)}
        errorMessage={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <p className="text-sm text-gray-800">{field.value}</p>
          )}
        />
      </FormItem>
      <FormItem
        label="Current Rate"
        invalid={Boolean(errors.standard_rate)}
        errorMessage={errors.standard_rate?.message}
      >
        <Controller
          name="standard_rate"
          control={control}
          render={({ field }) => (
            <p className="text-sm text-gray-800">{field.value}</p>
          )}
        />
      </FormItem>
      <div className="mt-6">
        <FormItem
          label="Category"
          invalid={Boolean(errors.item_group)}
          errorMessage={errors.item_group?.message}
        >
          <Controller
            name="item_group"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Category"
                componentAs={CreatableSelect}
                options={itemGroupOptions}
                onChange={(option) => field.onChange(option)}
              />
            )}
          />
        </FormItem>
      </div>
    </Card>
  )
}

export default OverviewSection
