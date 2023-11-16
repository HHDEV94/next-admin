import Image from 'next/image'
import styles from '@/app/ui/users/sigleUser/singleUser.module.css'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={'/noavatar.png'} alt='' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type='text' name='title' placeholder='Jonh Doe' />

          <label>Price</label>
          <input type='number' name='price' placeholder='$100, $200, $300...' />

          <label>Stock</label>
          <input type='number' name='stock' placeholder='100, 250, 500' />

          <label>Color</label>
          <input type='text' name='color' placeholder='red, gray, blue, midnight' />

          <label>Size</label>
          <textarea type='text' name='size' placeholder='San Francisco' />

          <label>Category</label>
          <select name='category' id='category'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>

          <label>Description</label>
          <textarea name='desc' id='desc' rows={10} placeholder='Description' />

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
