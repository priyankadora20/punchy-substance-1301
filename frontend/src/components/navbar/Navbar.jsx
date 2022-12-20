import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../styles/navbar.module.css";
import { BsChevronDown, BsCart3 } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/suggestionReducer/action";

import {

  Button,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ShowSearching from "../searchPage/ShowSearching";
import axios from "axios";
const Navbar = () => {
  const data = useSelector((store) => store.suggestionReducer.suggestion);
  const isAdmin=useSelector((e)=>e.authreducer.isAdmin)
  const [cartLen,setCartLen]=useState(0)
  const dispatch = useDispatch();
const navigate=useNavigate()
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [data.length, dispatch]);
  function xyz(){
    // console.log("scoll",window.scrollY)
  }
const len=useCallback(()=>{
 return axios.get("https://wild-tan-puffer-veil.cyclic.app/cart").then((r)=>{
    setCartLen(r.data.length)
  })
},[xyz])
  useEffect(()=>{
  len()
  },[len])
  window.addEventListener("scroll",xyz)
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
            <span
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <span className={styles.lang_text}> Languages</span>
              <BsChevronDown />
            </span>
            {/* <div className={styles.rotateddiv}></div> */}
            <ul className={styles.lang_list}>
              <li>English</li>
              <li>Etaliano</li>
              <li>Γλώσσα</li>
              <li>Deutsch</li>
              <li>Espanol</li>
              <li>Francais</li>
              <li>Portugues</li>
              <li>Slovencina</li>
              <li>Magyar</li>
              <li>Limba romana</li>
              <li>Cestina</li>
              <li>Japanese</li>
              <li>שפה</li>
              <li>Jezik</li>
            </ul>
          </div>
          <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>Support System</span>
            <span>
              <BsChevronDown />
            </span>
          </li>
        </div>
     
        <hr />

        <div className={styles.searching}>
          <div>
            <Link to={"/"}>
            <img
              width="100"
              src={process.env.PUBLIC_URL + "/gadgetstop.jpeg"}
              alt="gedgetsstop"
              />
              </Link>
          </div>

          <span >
            <ShowSearching/>
           
          </span>

          <div className={styles.country}>
            <span className={styles.country_text}>Country</span>
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
                <div style={{fontSize:"15px"}}>Country Name</div>
                <select style={{ border: "none"}}>
                  <option value="india"></option>
                  <option value="india">India</option>
                  <option value="india">US</option>
                  <option value="india">Russia</option>
                  <option value="india">Japan</option>
                  <option value="india">China</option>
                  <option value="india">UK</option>
                  <option value="india">Sri Lanka</option>
                  <option value="india">Nepal</option>
                  <option value="india">Pakistan</option>
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
                <div style={{fontSize:"15px"}}>INR Rs</div>
                <select style={{ border: "none" }}>
                  <option value="india"></option>
                  <option value="india">INR</option>
                  <option value="india">USD</option>
                  <option value="india">KD</option>
                  <option value="india">Riyal</option>
                  <option value="india">Taka</option>
                  <option value="india">USD</option>
                  <option value="india">INR</option>
                  <option value="india">USD</option>
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
            {/* <div> */}
            <span style={{ display: "flex" }}>
              <AiOutlineUser />
              <span className={styles.userName}>User</span>{" "}
            </span>
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
                  onClick={()=>navigate("/signup")}
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
                  onClick={()=>navigate("/login")}
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
                width="35"
                src={process.env.PUBLIC_URL + "/google-auth.png"}
                alt="google"
              />
            </div>
            {/* </div> */}
          </div>
          <div className={styles.cart}>
            <div style={{ display: "flex" }} onClick={()=>navigate("/cart")}>
              {/* <span> */}
              <BsCart3 />
              {/* </span> */}
              <sup
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartLen}
              </sup>
            </div>
          </div>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <ul className={styles.menu_list} id="menulist">
          <Link to={"#"} className={styles.li}>
            <span className={styles.cat_ham}>
              <RxHamburgerMenu />
              <span>Category</span>
            </span>{" "}
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
          <Link to={`/product`} className={styles.li}>
            New
          </Link>
          <Link to={"/product"} className={styles.li}>
            Bestselling
          </Link>

          <Link to={"/product"} className={styles.li}>
            Brand
          </Link>
          <Link to={"/product"} className={styles.li}>
            Clearance
          </Link>
          <Link to={"/product"} className={styles.li}>
            Deals
          </Link>
          <Link to={"/product"} className={styles.li}>
            Coupons
          </Link>
          <Link to={"/addproduct"} className={styles.li}>
            {isAdmin?"Add Product":""}
          </Link>
        </ul>

        <div className={styles.responsivenav}>
          <div className={styles.res_menu}>
     
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
                variant="outline"
              />

              <MenuList ml={"-20px"} color={"black"} fontSize={"20px"}>
                <MenuItem>Category</MenuItem>
                <MenuItem>New</MenuItem>
                <MenuItem>Bestselling</MenuItem>
                <MenuItem>Brand</MenuItem>
                <MenuItem>Clearance</MenuItem>
                <MenuItem>Deals</MenuItem>
                <MenuItem>Coupons</MenuItem>
                <MenuItem>{isAdmin?"Add Product":""}</MenuItem>
                <Flex >
                  <Input></Input>
                  <Button>Subscribe</Button>
                </Flex>
              </MenuList>
            </Menu>
            <Link to={"/"}>
            <img
              width="90"
              src={process.env.PUBLIC_URL + "/gadgetstop.jpeg"}
              alt="logo"
              />
              </Link>
            <span className={styles.res_user}>
              <AiOutlineUser />

              <div className={styles.res_user_list}>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    width: "95%",
                    justifyContent: "center",
                    height: "auto",
                    paddingTop: "10px",
                    margin: "auto",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#2c8afb",
                      border: "none",
                      fontSize: "18px",
                      height: "80%",
                      color: "white",
                      width: "46%",
                      borderRadius: "5px",
                    }}
                    onClick={()=>navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    style={{
                      backgroundColor: "#9ed2fa",
                      border: "1px solid #2c8afb",
                      fontSize: "18px",
                      height: "80%",
                      color: "#2c8afb",
                      width: "46%",
                      borderRadius: "5px",
                    }}
                    onClick={()=>navigate("/signup")}
                  >
                    Signup
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
                    width="30px"
                    src={process.env.PUBLIC_URL + "/google-auth.png"}
                    alt="google"
                  />
                </span>
              </div>
            </span>{" "}
            <span style={{ display: "flex" }}>
              <BsCart3 />
              <sup
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartLen}
              </sup>
            </span>
          </div>
          <FiSearch color="#2c8afb" fontSize="24px" />

          <ShowSearching/>
       
        </div>
      </NavPageWraper>

    </>
  );
};

const NavPageWraper = styled.div`
  width: 100%;
  margin: auto;
  height: auto;
  padding-bottom: 1px;
  background-color: #c2171d;
  color: white;

  @media screen and (max-width: 420px) {
    overflow: hidden;
  }
`;

export default Navbar;
