import Search from '@/app/ui/users/search/Search'
import styles from '../../ui/users/user.module.css'
import Link from 'next/link'
import USER_DATA from '@/constants/userData'
import UserDashboard from '@/app/ui/users/dashboard/UserDashboard'
import Pagination from '@/app/ui/users/pagination/Pagination'

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={'Search for a user...'} />
        <Link href={'/dashboard/users/add'}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {USER_DATA.map(user => (
            <UserDashboard key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage
