import Image from 'next/image'
import MenuLink from './menuLink/menuLink'
import { menuItems } from '../../../../constants/menu'
import styles from './sidebar.module.css'
import { MdLogout } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src='/noavatar.png'
          className={styles.userImage}
          alt='no_avatar'
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map(cat => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout /> Logout
      </button>
    </div>
  )
}

export default Sidebar
