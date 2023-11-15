import Link from 'next/link'
import Search from '@/app/ui/users/search/Search'
import Pagination from '@/app/ui/users/pagination/Pagination'
import styles from '@/app/ui/products/products.module.css'
import PRODUCT_DATA from '@/constants/productData'
import ProductDashboard from '@/app/ui/products/dashboard/ProductDashboard'

const ProductPage = () => {
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
          {PRODUCT_DATA.map(product => (
            <ProductDashboard key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductPage
