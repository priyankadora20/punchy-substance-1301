import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";

const SearchPage = ({ setQuery, suggestion, suggvalue }) => {

  const [search, setSearch] = useState("");
  const [q,setQ]=useState("")
  const dispatch=useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClickSearchWithQ=(e)=>{
    if(e){
      setQ(e)
    }
  }
  useEffect(()=>{
      if(q){
        // fetch data releted to query

        
      }
    

},[dispatch,q])

  useEffect(() => {
    // if(suggvalue){
    //   setSearch(suggvalue)
    // }else{
    //   setQuery(search);
    // }
    setQuery(search)
  }, [search, setQuery,suggvalue]);
  return (
    <div className={styles.searchbar}>
      <div className={styles.search_text}>
        All category <span>{"|"}</span>
      </div>
      <input type="text" value={search} onChange={handleChange} />
      <span className={styles.span} onClick={()=>handleClickSearchWithQ(search)}>
        <FiSearch />
      </span>
      
    </div>
  );
};

export default SearchPage;
