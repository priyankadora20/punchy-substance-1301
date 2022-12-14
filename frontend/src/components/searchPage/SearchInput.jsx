import React, { useEffect, useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FiSearch } from 'react-icons/fi';
const SearchPage = ({setQuery}) => {
  const [search,setSearch]=useState("")

  
  
  return (
    <div className={styles.searchbar}>
    <div>
      All category <span>{"|"}</span>
    </div>
    <input type="text" />
    <span className={styles.span}>
      <FiSearch />
    </span>
  </div>
  )
}
export default SearchPage