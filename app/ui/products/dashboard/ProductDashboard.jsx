import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/products/products.module.css'

const ProductDashboard = ({ product }) => {
  return (
    <tr>
      <td>
        <div className={styles.productContainer}>
          <Image
            src={product.image}
            alt='product_image'
            width={40}
            height={40}
            className={styles.productImage}
          />
          {product.name}
        </div>
      </td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.createdAt}</td>
      <td>{product.stock}</td>
      <td>
        <div className={styles.buttons}>
          <Link href={'/dashboard/products/1'}>
            <button className={`${styles.button} ${styles.view}`}>View</button>
          </Link>
          <Link href={'/'}>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default ProductDashboard
