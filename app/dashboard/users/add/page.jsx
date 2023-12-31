import { addUser } from '@/app/lib/actions'
import styles from '@/app/ui/products/addProduct/addProduct.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a new user</h1>
      <form action={addUser} className={styles.form}>
        <input type='text' placeholder='User Name' name='username' required />
        <input type='email' placeholder='E-mail' name='email' required />
        <input type='password' placeholder='Password' name='password' required />
        <input type='phone' placeholder='Phone' name='phone' />
        <select name='isAdmin' id='isAdmin'>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name='Address' id='address' rows='16' placeholder='Address...'></textarea>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUserPage
