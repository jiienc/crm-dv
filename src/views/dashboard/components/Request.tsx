import Card from '@/components/ui/Card'
import Sample from './DonatRequests/Sample'
import Improvement from './DonatRequests/Improvement'
import NewProduct from './DonatRequests/NewProduct'
import Return from './DonatRequests/Return'

const Request =() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg">Sample Request</h4>
        </div>
        <Sample />
      </Card>
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg">Improvement Request</h4>
        </div>
        <Improvement />
      </Card>
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg">New Product Request</h4>
        </div>
        <NewProduct />
      </Card>
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg">Return Request</h4>
        </div>
        <Return />
      </Card>
    </div>
  )
}

export default Request
