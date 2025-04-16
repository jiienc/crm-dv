'use client'

import { useEffect, useState } from 'react'
import Card from '@/components/ui/Card'
import {
  apiGetBilling,
  apiGetShipping,
} from '@/services/masterdata-components/customers/CustomersService'

type AddressData = {
  address_line1?: string
  city?: string
  state?: string
  country?: string
  pincode?: string
  phone?: string
  fax?: string
  email_id?: string
}

type DetailsSectionProps = {
  data: {
    data?: Partial<{
      name: string
      customer_name: string
      primary_address: string
      creation: string
    }>
  }
}

type AddressInfoFieldProps = {
  label: string
  value?: string
}

type CreditInfoFieldProps = {
  title: string
  value?: string | number
}

const DetailsSection = ({ data }: DetailsSectionProps) => {
  const [billing, setBilling] = useState<AddressData | null>(null)
  const [shipping, setShipping] = useState<AddressData | null>(null)

  const name = data?.data?.name

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!name) return

      try {
        const [billingRes, shippingRes] = await Promise.all([
          apiGetBilling<{ data: AddressData }, { id: string }>({ id: name }),
          apiGetShipping<{ data: AddressData }, { id: string }>({ id: name }),
        ])

        setBilling(billingRes.data)
        setShipping(shippingRes.data)
      } catch (err) {
        console.error('Error fetching address data:', err)
      }
    }

    fetchAddresses()
  }, [name])

  const AddressInfoField = ({ label, value }: AddressInfoFieldProps) => (
    <div>
      <span className="text-gray-500">{label}: </span>
      <span>{value || '-'}</span>
    </div>
  )

  const CreditInfoField = ({ title, value = '-' }: CreditInfoFieldProps) => {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">{title}</span>
        <p className="text-base font-bold heading-text">{value}</p>
      </div>
    )
  }

  const renderAddressCard = (label: string, address?: AddressData | null) => (
    <Card>
      <div className="font-bold heading-text">{label}</div>
      <div className="mt-4 flex flex-col gap-1 font-semibold text-sm">
        <AddressInfoField label="Address" value={address?.address_line1} />
        <AddressInfoField label="City" value={address?.city} />
        <AddressInfoField label="Regional" value={address?.state} />
        <AddressInfoField label="Country" value={address?.country} />
        <AddressInfoField label="Postal Code" value={address?.pincode} />
        <AddressInfoField label="Phone" value={address?.phone} />
        <AddressInfoField label="Fax" value={address?.fax} />
        <AddressInfoField label="Email" value={address?.email_id} />
      </div>
    </Card>
  )

  return (
    <>
      <h6 className="mt-5">Addresses</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {renderAddressCard('Billing Address', billing)}
        {renderAddressCard('Shipping Address', shipping)}
      </div>

      <h6 className="mt-8">Credits</h6>
      <Card className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreditInfoField title="Max Term" value="-" />
        <CreditInfoField title="Credit Limit" value="-" />
        <CreditInfoField title="Current AR" value="-" />
        <CreditInfoField title="AR Overdue" value="-" />
        <CreditInfoField title="Current SO" value="-" />
        <CreditInfoField title="Credit Used" value="-" />
        <CreditInfoField title="Credit Avail" value="-" />
      </Card>
    </>
  )
}

export default DetailsSection
