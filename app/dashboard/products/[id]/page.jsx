import Image from 'next/image'
import styles from '@/app/ui/users/sigleUser/singleUser.module.css'
import { updateProduct } from '@/app/lib/actions'
import { fetchProduct } from '@/app/lib/data'

const SingleProductPage = async ({ params }) => {
  const { id } = params
  const prod = await fetchProduct(id)
  console.log(prod)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={prod?.img || '/noproduct.jpg'} alt='' fill />
        </div>
        {prod.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type='hidden' name='id' value={id} />
          <label>Title</label>
          <input type='text' name='title' placeholder={prod.title} />

          <label>Price</label>
          <input type='number' name='price' placeholder={prod.price} />

          <label>Stock</label>
          <input type='number' name='stock' placeholder={prod.stock} />

          <label>Color</label>
          <input type='text' name='color' placeholder={prod.color} />

          <label>Size</label>
          <textarea type='text' name='size' placeholder={prod.size} />

          <label>Category</label>
          <select name='category' id='category'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>

          <label>Description</label>
          <textarea name='desc' id='desc' rows={10} placeholder={prod.description} />

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
