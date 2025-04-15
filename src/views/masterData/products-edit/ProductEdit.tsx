import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import {
  apiGetProduct,
  apiUpdateItemGroup,
} from '@/services/masterdata-components/products/ProductService'
import ProductForm from '../products-form'
import sleep from '@/utils/sleep'
import NoUserFound from '@/assets/svg/NoUserFound'
import { TbArrowNarrowLeft } from 'react-icons/tb'
import { useParams, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import type { ProductFormSchema } from '../products-form'
import type { Product } from '../products/types'

const ProductEdit = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading } = useSWR(
    [`/resource/Item/${id}`, { id: id as string }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) => apiGetProduct<Product, { id: string }>(params),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  )
  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleFormSubmit = async (values: ProductFormSchema) => {
    console.log('Submitted values', values)
    setIsSubmiting(true)
    try {
      const payload = {
        item_group: values.item_group ? values.item_group.value : '',
      }      
      await apiUpdateItemGroup<Product>(id as string, payload)
      await sleep(800)
      toast.push(<Notification type="success">Changes Saved!</Notification>, {
        placement: 'top-center',
      })
      navigate('/master-data/products')
    } catch {
      toast.push(<Notification>Failed to update product.</Notification>, {
        placement: 'top-center',
      })
    } finally {
      setIsSubmiting(false)
    }
  }

  const getDefaultValues = (): ProductFormSchema => {
    if (data?.data) {
      const { name, item_group, standard_rate } = data.data
      return {
        name,
        standard_rate,
        item_group: { value: item_group, label: item_group },
      }
    }
    return {
      name: '',
      standard_rate: 0,
      item_group: { value: '', label: '' },
    }
  }

  const handleBack = () => {
    history.back()
  }

  return (
    <>
      {!isLoading && !data && (
        <div className="h-full flex flex-col items-center justify-center">
          <NoUserFound height={280} width={280} />
          <h3 className="mt-8">No product found!</h3>
        </div>
      )}
      {!isLoading && data && (
        <>
          <ProductForm
            defaultValues={getDefaultValues() as ProductFormSchema}
            newProduct={false}
            onFormSubmit={handleFormSubmit}
          >
            <Container>
              <div className="flex items-center justify-between px-8">
                <Button
                  className="ltr:mr-3 rtl:ml-3 rounded-lg"
                  type="button"
                  variant="plain"
                  icon={<TbArrowNarrowLeft />}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <div className="flex items-center rounded-lg">
                  <Button
                    variant="solid"
                    type="submit"
                    loading={isSubmiting}
                    className="rounded-lg"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Container>
          </ProductForm>
        </>
      )}
    </>
  )
}

export default ProductEdit
