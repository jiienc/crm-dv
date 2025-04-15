import Card from '@/components/ui/Card'

type BillingSectionProps = {
  data: {
    data?: Partial<{
      name: string
      customer_name: string
      primary_address: string
      creation: string
    }>
  }
}

const BillingSection = ({ data }: BillingSectionProps) => {
  const addressHTML = data?.data?.primary_address || ''
  const addressLines = addressHTML
    .split(/<br\s*\/?>|\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)

  const address = addressLines[0] || '-'
  const city = addressLines[1] || '-'
  const regional = addressLines[2] || '-'
  const country = addressLines[3] || '-'

  const renderAddressCard = (label: string) => (
    <Card>
      <div className="font-bold heading-text">{label}</div>
      <div className="mt-4 flex flex-col gap-1 font-semibold text-sm">
        <div>
          <span className="text-gray-500">Address: </span>
          <span>{address}</span>
        </div>
        <div>
          <span className="text-gray-500">City: </span>
          <span>{city}</span>
        </div>
        <div>
          <span className="text-gray-500">Regional: </span>
          <span>{regional}</span>
        </div>
        <div>
          <span className="text-gray-500">Country: </span>
          <span>{country}</span>
        </div>
        <div>
          <span className="text-gray-500">Postal Code: </span>
          <span>{country}</span>
        </div>
        <div>
          <span className="text-gray-500">Phone: </span>
          <span>{country}</span>
        </div>
        <div>
          <span className="text-gray-500">Fax: </span>
          <span>{country}</span>
        </div>
        <div>
          <span className="text-gray-500">Email: </span>
          <span>{country}</span>
        </div>
      </div>
    </Card>
  )

  return (
    <>
      <h6 className="mt-5">Addresses</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {renderAddressCard('Billing Address')}
        {renderAddressCard('Shipping Address')}
      </div>

      <h6 className="mt-8">Credit Details</h6>
      <Card className="mt-4" bodyClass="py-0">
        <h4>PPPPPPPPP</h4>
      </Card>
    </>
  )
}

export default BillingSection
