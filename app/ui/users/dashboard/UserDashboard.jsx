import Link from 'next/link'
import Image from 'next/image'
import styles from '../user.module.css'

const UserDashboard = ({ user }) => {
  return (
    <tr>
      <td>
        <div className={styles.userContainer}>
          <Image
            src={user.image}
            alt='user_image'
            width={40}
            height={40}
            className={styles.userImage}
          />
          {user.name}
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.createdAt}</td>
      <td>{user.role}</td>
      <td>{user.status}</td>
      <td>
        <div className={styles.buttons}>
          <Link href={'/dashboard/users/1'}>
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

export default UserDashboard
