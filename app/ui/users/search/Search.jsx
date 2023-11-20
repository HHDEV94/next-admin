'use client'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import styles from './search.module.css'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  //Search and fetch item using url query
  const handleSearch = useDebouncedCallback(e => {
    const params = new URLSearchParams(searchParams)
    params.set('page', 1)

    if (e.target.value) {
      //it search after to write 3 characters.
      e.target.value.length > 2 && params.set('q', e.target.value)
    } else {
      params.delete('q')
    }

    replace(`${pathname}?${params}`)
  })

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
