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
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/suggestionReducer/action";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { icons } from "react-icons";
import axios from "axios";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const [suggvalue, setSuggvalue] = useState("");
  const [searchQueryVal,setSearchQueryVal]=useState("")
  const data = useSelector((store) => store.suggestionReducer.suggestion);
  const [suggestion, setSuggestion] = useState([]);
  console.log("suggvalue", suggvalue);
  const dispatch = useDispatch();

  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

 useEffect(()=>{
  // if(searchQueryVal){
  //   axios.get(`https://fakestoreapi.com/products/category/${searchQueryVal}`).the((r)=>{
  //       console.log("search",r)
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // }
 },[searchQueryVal])
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [data.length, dispatch]);
  useEffect(() => {
    if (query === "") {
      setSuggestion([]);
    } else {
      let querywithouspace = query.trim().toLocaleLowerCase();
      let newsuggetion = data
        .filter((ele) => {
          return ele.category.toLowerCase().indexOf(querywithouspace) !== -1
            ? true
            : false;
        })
        .map((e) => {
          return e.category;
        });
      setSuggestion(newsuggetion);
    }
  }, [query, data, suggvalue]);
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
            <img
              width="100"
              src={process.env.PUBLIC_URL + "/gadgetstop.jpeg"}
              alt="gedgetsstop"
            />
          </div>

          <span>
            <SearchPage setQuery={queryHandler} suggvalue={suggvalue} />
            <SuggestionBox limit={5}>
              {suggestion?.map((e, i) => (
                <div key={i} onClick={() => setSuggvalue(e)}>
                  {/* <Link to={`${i}`}>{e}</Link> */}

                  {/* this is for test above is when want redirect */}
                  <div onClick={()=>setSearchQueryVal(e)}>{e}</div>
                </div>
              ))}
            </SuggestionBox>
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
                <div style={{fontSize:"15px"}}>INR Rs</div>
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
                width="35"
                src={process.env.PUBLIC_URL + "/google-auth.png"}
                alt="google"
              />
            </div>
            {/* </div> */}
          </div>
          <div className={styles.cart}>
            <div style={{ display: "flex" }}>
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
                5
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
            {/* <span>
              <label for="nav_check" id="hamburger">
                <RxHamburgerMenu />
              </label>     
            </span> */}
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
                <MenuItem>App only</MenuItem>
                <Flex >
                  <Input></Input>
                  <Button>Subscribe</Button>
                </Flex>
              </MenuList>
            </Menu>
            <img
              width="90"
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
                5
              </sup>
            </span>
          </div>
          <FiSearch color="#2c8afb" fontSize="24px" />
          <SearchPage setQuery={queryHandler} />
          <SuggestionBox limit={5}>
            {suggestion?.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </SuggestionBox>
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
  background-color: #2c8afb;
  color: white;

  @media screen and (max-width: 420px) {
    overflow: hidden;
  }
`;

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
export default Navbar;
