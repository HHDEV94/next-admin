import Search from '@/app/ui/users/search/Search'
import UserDashboard from '@/app/ui/users/dashboard/UserDashboard'
import Pagination from '@/app/ui/users/pagination/Pagination'
import Link from 'next/link'
import { fetchUsers } from '@/app/lib/data'
import styles from '../../ui/users/user.module.css'

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, users } = await fetchUsers(q, page)

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
          {users.map(user => (
            <UserDashboard key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
