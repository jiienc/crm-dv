import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
  name: string
  standard_rate: number
  item_group: { value: string; label: string }
}

export type ProductFormSchema = OverviewFields

export type FormSectionBaseProps = {
  control: Control<ProductFormSchema>
  errors: FieldErrors<ProductFormSchema>
}

export type AllItemGroup = {
  name: string;
}

export type AllItemGroupResponse = {
  data: AllItemGroup[];
}