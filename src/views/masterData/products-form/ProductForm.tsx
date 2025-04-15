import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import OverviewSection from './OverviewSection'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { ProductFormSchema } from './types'

type ProductFormProps = {
  onFormSubmit: (values: ProductFormSchema) => void
  defaultValues?: ProductFormSchema
  newProduct?: boolean
} & CommonProps

const validationSchema: ZodType<ProductFormSchema> = z.object({
  name: z.string().min(1),
  standard_rate: z.number().min(0),
  item_group: z.object({ value: z.string(), label: z.string() }),
})

const ProductForm = (props: ProductFormProps) => {
  const {
    onFormSubmit,
    defaultValues = {},
    children,
  } = props

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<ProductFormSchema>({
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(validationSchema),
  })

  useEffect(() => {
    if (!isEmpty(defaultValues)) {
      reset(defaultValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(defaultValues)])

  const onSubmit = (values: ProductFormSchema) => {
    onFormSubmit?.(values)
  }

  return (
    <Form
      className="flex w-full h-full"
      containerClassName="flex flex-col w-full justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="gap-4 flex flex-col flex-auto">
            <OverviewSection control={control} errors={errors} />
          </div>
        </div>
      </Container>
      <BottomStickyBar>{children}</BottomStickyBar>
    </Form>
  )
}

export default ProductForm
