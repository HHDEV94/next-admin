import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/products/products.module.css'
import { deleteProduct } from '@/app/lib/actions'

const ProductDashboard = ({ product }) => {
  return (
    <tr>
      <td>
        <div className={styles.productContainer}>
          <Image
            src={product.img || '/noproduct.jpg'}
            alt='product_image'
            width={40}
            height={40}
            className={styles.productImage}
          />
          {product.title}
        </div>
      </td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>{product.createdAt?.toString().slice(4, 16)}</td>
      <td>{product.stock}</td>
      <td>
        <div className={styles.buttons}>
          <Link href={`/dashboard/products/${product.id}`}>
            <button className={`${styles.button} ${styles.view}`}>View</button>
          </Link>
          <form action={deleteProduct}>
            <input type='hidden' name='id' value={product.id} />
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </form>
        </div>
      </td>
    </tr>
  )
}

export default ProductDashboard
