import { addProduct } from '@/app/lib/actions'
import styles from '@/app/ui/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a new product</h1>
      <form action={addProduct} className={styles.form}>
        <input type='text' placeholder='title' name='title' required />
        <select name='category' id='cat'>
          <option value='general'>Choose a Category</option>
          <option value='kitchen'>Kitchen</option>
          <option value='phone'>Phone</option>
          <option value='computer'>Computer</option>
        </select>
        <input type='number' placeholder='Price: $1200, $500, $999' name='price' />
        <input type='number' placeholder='Stock:10, 20, 35, 50' name='stock' />
        <input type='text' placeholder='Color' name='color' />
        <input type='text' placeholder='Size' name='size' />
        <textarea name='description' id='desc' rows='16' placeholder='Description...'></textarea>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProductPage
