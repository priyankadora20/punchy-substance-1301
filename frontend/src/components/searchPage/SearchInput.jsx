import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/navbar.module.css";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useThrottle } from "use-throttle";
import { Link } from "react-router-dom";
import axios from "axios";
const SearchPage = ({ setQuery, suggestion, setSuggValue }) => {
  const [search, setSearch] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const scrollRef = useRef();
  const handleChange = (e) => {
    setSearch(e.target.value);
    axios
      .get(`http://localhost:8500/products?q=${search}`)
      .then((r) => {
        console.log("from api", r.data);
        setFiltered(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClickSearchWithQ = (e) => {
    //   if(e){
    //     if(search===""){
    //       setFiltered([])
    //     }
    //     axios.get(`http://localhost:8500/products?q=${e}`).then((r)=>{
    //       console.log("from api",r.data)
    //       setFiltered(r.data)
    //     }).catch((e)=>{
    //       console.log(e)
    //     })
    //   }
    // setSearch("")
  };
  const handleActiveSuggestion = (e) => {
    switch (e.keyCode) {
      // up Arrow
      case 38:
        if (activeOption === 1) {
          scrollRef.current.scrollTop = suggestion.length * 30;
          setActiveOption(suggestion.length);
        } else if (activeOption <= suggestion.length - 3) {
          scrollRef.current.scrollTop -= 30;
        }
        setActiveOption((prev) => prev - 1);
        break;
      case 40:
        if (activeOption === suggestion.length) {
          scrollRef.current.scrollTop = 0;
          setActiveOption(0);
        } else if (activeOption >= 4) {
          scrollRef.current.scrollTop += 30;
        }
        setActiveOption((prev) => prev + 1);
        break;

      case 13:
        handleClickSearchWithQ(e.value);
        break;
      default:
        return;
    }
  };

  const throttledText = useThrottle(search, 1000);

  useEffect(() => {
    setQuery(throttledText);
  }, [setQuery, throttledText]);
  // useEffect(() => {
  //   setQuery(search);
  // }, [search, setQuery, suggvalue]);
  return (
    <>
      <span onKeyUp={handleActiveSuggestion}>
        <div className={styles.searchbar}>
          <div className={styles.search_text}>
            All category <span>{"|"}</span>
          </div>
          <input type="text" value={search} onChange={handleChange} />
          <span
            className={styles.span}
            onClick={() => handleClickSearchWithQ(search)}
          >
            <FiSearch />
          </span>
        </div>
        <SuggestionBox active={activeOption} limit={5} ref={scrollRef}>
          {suggestion?.map((e, i) => (
            <div
              key={i}
              onMouseOver={() => {
                setActiveOption(i + 1);
              }}
              onClick={() => {
                handleClickSearchWithQ(e);
                console.log("after enter", e);
              }}
            >
              <Link
                to={`/product/${e._id}`}
                
                onMouseOver={() => {
                  setActiveOption(i + 1);
                }}
              >
                {e.brand}
              </Link>
            </div>
          ))}
        </SuggestionBox>

        {/* <SearchedDataWraper>
          {filtered.length>0&&filtered.map((e)=>(
            <Link to={`/landing/${e._id}`}>
            <div key={e._id} style={{width:"200px",height:"200px"}}>
              <img src={e.image} alt={e.title} />
              <div>{e.title.split(" ")[0]}</div>
              <div>{e.category}</div>
              <div>{e.brand}</div>
            </div>
            </Link>
              ))}
        </SearchedDataWraper> */}
      </span>
    </>
  );
};
const SuggestionBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: block;
  z-index:999;
  flex: 1;
  width: 500px;
  position: absolute;
  line-height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  max-height: ${({ limit }) => `${limit * 30}px`};
  background-color: white;
  overflow: auto;
  margin: auto;
  color: black;

  & :nth-child(${({ active }) => active}){
    background-color:rgba(0,0,0,0.3);
    cursor:pointer;
  }
  @media (max-width: 425px) {
    margin-top:-20px;
    width: 60%;
    & * {
      margin: 5px;
    }
    &:hover div {
      background-color: gray;
    }
  }

  @media (max-width: 768px) {
    flex-1;
    width: 52%;
   
   
  }

`;
const SearchedDataWraper = styled.div`
  width: 500px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  flex-wrap: wrap;
  position: absolute;
  background-color: #ffffff75;
  z-index: 990;
  max-height: 100vh;
  overflow: scroll;
  color: black;
`;
export default SearchPage;
