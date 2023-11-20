import Link from 'next/link'
import Search from '@/app/ui/users/search/Search'
import Pagination from '@/app/ui/users/pagination/Pagination'
import ProductDashboard from '@/app/ui/products/dashboard/ProductDashboard'
import { fetchProducts } from '@/app/lib/data'
import styles from '@/app/ui/products/products.module.css'

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, products } = await fetchProducts(q, page)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={'Search for a products...'} />
        <Link href={'/dashboard/products/add'}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductDashboard key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductPage
