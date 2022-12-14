import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../styles/navbar.module.css";
import { BsChevronDown, BsCart3 } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchPage from "../searchPage/SearchInput";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [query, setQuery] = useState("");
  // const data=useSelector((store)=>store.suggestionReducer.suggestion)
  const data=[]
  const [suggestion,setSuggestion]=useState([])


  const queryHandler=useCallback((val)=>{
    setQuery(val)
  },[])

  useEffect(()=>{
    if(data.length===0){
      // getData API
    }
    else{
      if(query===""){
        setSuggestion([])
      }else{
  
      }
    }
  },[data.length,query])
  return (
    <>
      <NavPageWraper>
        <div className={styles.list_container}>
          <li className={styles.downarr}>
            <span>
              <CiMobile2 />
            </span>{" "}
            <span>Save $50 with app</span>
            <span>
              <BsChevronDown />
            </span>
          </li>
          <div className={styles.languages}>
            <span className={styles.lang_text}> Languages</span>
            <span>
              <BsChevronDown />
            </span>
            {/* <div className={styles.rotateddiv}></div> */}
            <ul className={styles.lang_list}>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
            </ul>
          </div>
          <li>
            Support System{" "}
            <span>
              <BsChevronDown />
            </span>
          </li>
        </div>
        <hr />
        <div className={styles.searching}>
          <img
            height="34"
            src={process.env.PUBLIC_URL + "/gadgetstop.jpeg"}
            alt="logo"
          />

          <SearchPage setQuery={queryHandler}/>
          <div className={styles.country}>
            <span>Country</span>
            <div className={styles.country_list}>
              <p>Sip to</p>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  justifyContent: "space-around",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                <div>country name</div>
                <select style={{ border: "none" }}>
                  <option value="india"></option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                </select>
              </div>
              <p>Currency</p>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  justifyContent: "space-around",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                <div>INR Rs</div>
                <select style={{ border: "none" }}>
                  <option value="india"></option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                  <option value="india">India</option>
                </select>
              </div>
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "20px",
                }}
              >
                Save
              </button>
            </div>
          </div>
          <div className={styles.user}>
            <div>
              <span>
                <AiOutlineUser />
              </span>
              <span className={styles.userName}>User</span>{" "}
              <div className={styles.user_list}>
                <span style={{ fontSize: "18px" }}>Welcome to Gadgetstop</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "15px",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#2c8afb",
                      color: "white",
                      border: "1px solid #2c8afb",
                      width: "40%",
                      borderRadius: "5px",
                      fontSize: "22px",
                    }}
                  >
                    Join
                  </button>
                  <button
                    style={{
                      backgroundColor: "#9ed2fa",
                      color: "#2c8afb",
                      border: "1px solid #2c8afb",
                      width: "40%",
                      borderRadius: "5px",
                      fontSize: "22px",
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                    alignItems: "center",
                  }}
                >
                  <hr
                    style={{
                      width: "45%",
                      height: "1px",
                      backgroundColor: "gray",
                    }}
                  />
                  {"or"}
                  <hr
                    style={{
                      width: "45%",
                      height: "1px",
                      backgroundColor: "gray",
                    }}
                  />
                </div>
                <img
                  height="25"
                  style={{ padding: "27px" }}
                  src={process.env.PUBLIC_URL + "/google-auth.png"}
                  alt="google"
                />
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <div>
              <span>
                <BsCart3 />
              </span>
              <sup
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "16px",
                  padding: "3px",
                }}
              >
                {"5"}
              </sup>
            </div>
          </div>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <ul className={styles.menu_list} id="menulist">
          <Link to={"#"} className={styles.li}>
            <span className={styles.cat_ham}>
              <RxHamburgerMenu />
            </span>{" "}
            <span>Category</span>
            <ul className={styles.cat_list}>
              <li>Local warehouses</li>
              <li>Sports & Outdoors</li>
              <li>Smart Home & Gardens</li>
              <li>Customer & Electronics</li>
              <li>Generators & Portable Power</li>
              <li>Computers, Tablets & Accessories</li>
              <li>TV Boxes & Mini PC's</li>
              <li>Toys & Hobies</li>
              <li>Phone & Accessories</li>
              <li>Automobiles & Motorcycles</li>
              <li>Security Systems</li>
              <li>Wearable Devices</li>
            </ul>
          </Link>
          <Link to={"#"} className={styles.li}>
            New
          </Link>
          <Link to={"#"} className={styles.li}>
            Bestselling
          </Link>

          <Link to={"#"} className={styles.li}>
            Brand
          </Link>
          <Link to={"#"} className={styles.li}>
            Clearance
          </Link>
          <Link to={"#"} className={styles.li}>
            Deals
          </Link>
          <Link to={"#"} className={styles.li}>
            Coupons
          </Link>
          <Link to={"#"} className={styles.li}>
            App only
          </Link>
        </ul>

        <div className={styles.responsivenav}>
          <div className={styles.res_menu}>
            <span>
              <label for="nav_check" id="hamburger">
              <RxHamburgerMenu />
              </label>

              {/* <input type="checkbox" id="nav_check" hidden /> */}
              {/* <div className={styles.hamburger_list}>
          <Link to={"#"} className={styles.li}>
            <span>
              <RxHamburgerMenu />
            </span>{" "}
            <span>Category</span>
            <ul className={styles.cat_list}>
              <li>Local warehouses</li>
              <li>Sports & Outdoors</li>
              <li>Smart Home & Gardens</li>
              <li>Customer & Electronics</li>
              <li>Generators & Portable Power</li>
              <li>Computers, Tablets & Accessories</li>
              <li>TV Boxes & Mini PC's</li>
              <li>Toys & Hobies</li>
              <li>Phone & Accessories</li>
              <li>Automobiles & Motorcycles</li>
              <li>Security Systems</li>
              <li>Wearable Devices</li>
            </ul>
          </Link>
          <Link to={"#"} className={styles.li}>
            New
          </Link>
          <Link to={"#"} className={styles.li}>
            Bestselling
          </Link>

          <Link to={"#"} className={styles.li}>
            Brand
          </Link>
          <Link to={"#"} className={styles.li}>
            Clearance
          </Link>
          <Link to={"#"} className={styles.li}>
            Deals
          </Link>
          <Link to={"#"} className={styles.li}>
            Coupons
          </Link>
          <Link to={"#"} className={styles.li}>
            App only
          </Link>
        
              </div> */}
            </span>
            <img
              height="30"
              src={process.env.PUBLIC_URL + "/gadgetstop.jpeg"}
              alt="logo"
            />
            <span className={styles.res_user}>
              <AiOutlineUser />

              <div className={styles.res_user_list}>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    width: "95%",
                    justifyContent: "center",
                    height: "7vh",
                    paddingTop: "10px",
                    margin: "auto",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#2c8afb",
                      border: "none",
                      color: "white",
                      width: "46%",
                      borderRadius: "5px",
                    }}
                  >
                    Login
                  </button>
                  <button
                    style={{
                      backgroundColor: "#9ed2fa",
                      border: "1px solid #2c8afb",
                      color: "#2c8afb",
                      width: "46%",
                      borderRadius: "5px",
                    }}
                  >
                    Sign In
                  </button>
                </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "95%",
                    }}
                  >
                    <hr style={{ width: "45%", color: "gray" }} />
                    <span>{"or"}</span>
                    <hr style={{ width: "45%", backgroundColor: "gray" }} />
                  </div>
                    <span style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    height="25"
                    style={{ padding: "27px" }}
                    src={process.env.PUBLIC_URL + "/google-auth.png"}
                    alt="google"
                  />
                </span>
              </div>
            </span>{" "}
            <span>
              <BsCart3 />
            </span>
          </div>
          <div className={styles.res_search}>
            <FiSearch color="#2c8afb" fontSize="24px" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </NavPageWraper>
    </>
  );
};

const NavPageWraper = styled.div`
  max-width: 1100px;
  margin: auto;
  height: auto;
  padding-bottom: 1px;
  background-color: #2c8afb;
  color: white;

  @media screen and (max-width: 420px) {
    overflow: hidden;
  }
`;
export default Navbar;
