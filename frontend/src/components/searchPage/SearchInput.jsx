import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/navbar.module.css";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useThrottle } from "use-throttle";
import { useNavigate } from "react-router-dom";
const SearchPage = ({ setQuery, suggestion }) => {
  const [search, setSearch] = useState("");
  const [activeOption, setActiveOption] = useState(0);
const navigate=useNavigate()
  const scrollRef = useRef();
  const handleChange = (e) => {
    setSearch(e.target.value);
 
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
      // down Arrow
      case 40:
        if (activeOption === suggestion.length) {
          scrollRef.current.scrollTop = 0;
          setActiveOption(0);
        } else if (activeOption >= 4) {
          scrollRef.current.scrollTop += 30;
        }
        setActiveOption((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const throttledText = useThrottle(search, 1000);

  useEffect(() => {
    setQuery(throttledText);
  }, [setQuery, throttledText]);
    
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
          >
            <FiSearch />
          </span>
        </div>
        <SuggestionBox  active={activeOption} limit={5} ref={scrollRef}>
          {suggestion?.map((e, i) => (
            <div
              key={i}
              onMouseOver={() => {
                setActiveOption(i + 1);
              }}
              onClick={() => {
                navigate(`/product/${e._id}`)
              }}
            >
              {e.brand}
            </div>
          ))}
        </SuggestionBox>

   
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

export default SearchPage;
