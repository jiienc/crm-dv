import Card from '@/components/ui/Card'

type CustomerInfoFieldProps = {
  title?: string
  value?: string
}

type ProfileSectionProps = {
  data: {
    data?: Partial<{
      name: string
      customer_name: string
      primary_address: string
      creation: string
    }>
  }
}

const CustomerInfoField = ({ title, value }: CustomerInfoFieldProps) => {
  return (
    <div>
      <span className="font-semibold">{title}</span>
      <p className="heading-text font-bold">{value}</p>
    </div>
  )
}

const ProfileSection = ({ data = {} }: ProfileSectionProps) => {
  const customer = data?.data || {}

  const creation = customer.creation
  let code = 'CUST-XXXX'

  if (creation) {
    const year = creation.slice(2, 4)
    const micro = creation.split('.')[1]?.slice(-2) || '00'
    code = `CUST-${year}${micro}`
  }

  return (
    <Card className="w-full">
      <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
        <h4>Profile</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-10">
          <CustomerInfoField title="Customer Code" value={code} />
          <CustomerInfoField
            title="Customer Name"
            value={customer.customer_name}
          />
          <CustomerInfoField title="Status" value={code} />
          <CustomerInfoField title="Company Code" value={code} />
          <CustomerInfoField title="Tax ID" value={code} />
          <CustomerInfoField title="Tax Type" value={code} />
        </div>
      </div>
    </Card>
  )
}

export default ProfileSection
