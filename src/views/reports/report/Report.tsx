import { useEffect, useState } from 'react'
import { apiGetProductList } from '@/services/masterdata-components/products/ProductService'

const ProductList = () => {
  const [products, setProducts] = useState<
    { name: string; item_code: string; item_group: string }[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetProductList<
          { name: string; item_code: string; item_group: string }[],
          {}
        >({})
        setProducts(response.data)
      } catch (err) {
        setError('Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2 className="text-xl font-semibold">Product List</h2>
      <ul className="list-disc ml-5">
        {products.map((product) => (
          <li key={product.item_code}>
            <span className="font-bold">{product.name}</span> ({product.item_group})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
