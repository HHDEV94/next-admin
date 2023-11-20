import Link from 'next/link'
import Image from 'next/image'
import styles from '../user.module.css'

const UserDashboard = ({ user }) => {
  return (
    <tr>
      <td>
        <div className={styles.userContainer}>
          <Image
            src={user.img || '/noavatar.png'}
            alt='user_image'
            width={40}
            height={40}
            className={styles.userImage}
          />
          {user.username}
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.createdAt?.toString().slice(4, 16)}</td>
      <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
      <td>{user.isActive ? 'Active' : 'Passive'}</td>
      <td>
        <div className={styles.buttons}>
          <Link href={`/dashboard/users/${user.id}`}>
            <button className={`${styles.button} ${styles.view}`}>View</button>
          </Link>
          <form>
            <input type='hidden' name='id' value={user.id} />
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </form>
        </div>
      </td>
    </tr>
  )
}

export default UserDashboard
