import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import CommonHeader from "./CommonHeader";
import "../styles/orderSummary.css";
import CartItem from "../Cart/cartItem";
import { Link } from "react-router-dom";

const user = {
  f_name: "",
  l_name: "",
  country: "",
  zip: "",
  state: "",
  phone: "",
  city: "",
  add_1: "",
  add_2: "",
};

const OrderSummaryPage = () => {
  const [userData, setUserData] = useState(user);
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0)
  const [ship,setShip] = useState(false);
  let grandTotal= 0;

  const handleShip= (e)=>{
    // e.preventDefault();
    setShip(true);
  }

  console.log(ship)


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // console.log(userData);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(userData);
    alert("Address has been saved successfully..")
  };

  useEffect(() => {
   
    fetch("https://geek-buting-clone.onrender.com/cartdata",{
    
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      setCartItems(res)
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

   
  
  },[]);

  // extra shipping charges

  const extra = 4793.71;
  let remote= 3104.09


  if(ship){
     remote= 0
  }


  const getmrp= (data)=>{
    grandTotal += data
    console.log(data,"data");
   setSum(grandTotal)
  
  }


  return (
    <div>
      <CommonHeader />
      <Box id="shipping_address">
        <Text textAlign={"left"} fontWeight={"medium"} fontSize={"22px"}>
          Shipping Address
        </Text>
        <br />
        <Box textAlign={"left"} padding={"5px 15px 5px 15px"} bgColor={"pink.100"}>
          To ensure delivery and prevent delays, please make sure your complete
          address is in English.
        </Box>
        <Box>
          <form onSubmit={handleForm} className={"ship_form"}>
            <Box>
              <label>
                <span>*</span>First Name:
              </label>
              <input onChange={handleInput} name="f_name" type="text" />
            </Box>
            <Box>
              <label>
                <span>*</span>Last Name:
              </label>
              <input onChange={handleInput} name="l_name" type="text" />
            </Box>
            <Box>
              <label>
                <span>*</span>Country/Region:
              </label>
              <select id="country" onChange={handleInput} name="country">
                <option>Select Country --</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, Democratic Republic of the Congo
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the Former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </Box>
            <Box>
              <label>
                <span>*</span>State/Provience/County:
              </label>
              <select onChange={handleInput} name="state">
                <option value="">Select State --</option>
                <option value={"Andaman and Nicobar Islands"}>
                  Andaman and Nicobar Islands
                </option>
                <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
                <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
                <option value={"Assam"}>Assam</option>
                <option value={"Bihar"}>Bihar</option>
                <option value={"Chandigarh"}>Chandigarh</option>
                <option value={"Chhattisgarh"}>Chhattisgarh</option>
                <option value={"Dadra and Nagar Haveli"}>
                  Dadra and Nagar Haveli
                </option>
                <option value={"Daman and Diu"}>Daman and Diu</option>
                <option value={"Delhi"}>Delhi</option>
                <option value={"Goa"}>Goa</option>
                <option value={"Gujarat"}>Gujarat</option>
                <option value={"Haryana"}>Haryana</option>
                <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
                <option value={"Jammu and Kashmir"}>Jammu and Kashmir</option>
                <option value={"Jharkhand"}>Jharkhand</option>
                <option value={"Karnataka"}>Karnataka</option>
                <option value={"Kerala"}>Kerala</option>
                <option value={"Lakshadweep"}>Lakshadweep</option>
                <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
                <option value={"Maharashtra"}>Maharashtra</option>
                <option value={"Manipur"}>Manipur</option>
                <option value={"Meghalaya"}>Meghalaya</option>
                <option value={"Mizoram"}>Mizoram</option>
                <option value={"Nagaland"}>Nagaland</option>
                <option value={"Orissa"}>Orissa</option>
                <option value={"Pondicherry"}>Pondicherry</option>
                <option value={"Punjab"}>Punjab</option>
                <option value={"Rajasthan"}>Rajasthan</option>
                <option value={"Sikkim"}>Sikkim</option>
                <option value={"Tamil Nadu"}>Tamil Nadu</option>
                <option value={"Tripura"}>Tripura</option>
                <option value={"Uttaranchal"}>Uttaranchal</option>
                <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                <option value={"West Bengal"}>West Bengal</option>
              </select>
            </Box>
            <Box>
              <label>
                <span>*</span>City:
              </label>
              <input
                onChange={handleInput}
                name="city"
                placeholder="Your City"
                type="text"
              />
            </Box>
            <Box>
              <label>
                <span>*</span>Zip/Postal Code:
              </label>
              <input
                onChange={handleInput}
                name="zip"
                placeholder="Your ZIP/Postal"
                type="number"
              />
            </Box>
            <Box>
              <label>
                <span>*</span>Address line 1:
              </label>
              <input
                onChange={handleInput}
                name="add_1"
                placeholder="Street Address, company name, P.O. box, c/o, etc"
                type="text"
              />
            </Box>
            <Box>
              <label>
                <span>*</span>Address line 2:
              </label>
              <input
                onChange={handleInput}
                name="add_2"
                placeholder="Apartment, suite, unit, building, floor, etc (Optional)"
                type="text"
              />
            </Box>
            <Box>
              <label>
                <span>*</span>Phone number:
              </label>
              <input
                onChange={handleInput}
                name="phone"
                placeholder="Your phone number"
                type="number"
              />
            </Box>
            <Box>
              <input type="checkbox" />
              <Text>Use as default Address</Text>
            </Box>
            <Box display={"flex"}>
              <input type="submit" value={"Save"} />
              <input type="submit" value={"Cancel"} />
            </Box>
          </form>
          <Text fontSize={"22px"} fontWeight={"bold"}>
            Product List
          </Text>
          <br />
          <Box borderRadius={"5px"} border={"1px solid silver"}>
          <Box display={"flex"}>
        {/* <input type="checkbox" /> */}
        <Box className="cart_summary">
         
         {cartItems.length > 0 && cartItems.map((item)=>{
           return(
              <Box key={item._id}>
                  <CartItem getmrp= {getmrp} setSum={setSum} sum= {sum} name= {item.items_p} image={item.lazy_img_src} price= {item.items_price}/>
              </Box>
           )
         })}        
        </Box>
      </Box>
          </Box>
          <br />
          <Box>
            <Text fontSize={"22px"} fontWeight={"bold"}>
              Shipping & Delivery
            </Text>
          </Box>
          <br />
          <Box border={"1px solid silver"} >
            <Box
             className="ship_del"
            >
              <Text color={"gray"}>Shipping Methods</Text>
              <Text color={"gray"}>Estimated Shopping Time</Text>
              <Text color={"gray"}>Shipping Cost</Text>
            </Box>
            <Box className="extra_chg">
              <Box display={"flex"} gap={"10px"}>
                <input  type="radio" />
                <Text>Priority Line</Text>
              </Box>
              <Text>10 -20 business days</Text>
              <Text fontWeight={"bold"}>Free Shipping</Text>
            </Box>
            <Box className="extra_chg">
              <Box display={"flex"} gap={"10px"}>
                <input checked={ship} onChange={handleShip}  type="radio" />
                <Text >Expedited Shipping</Text>
              </Box>
              <Text>7 -18 business days</Text>
              <Box>
              <Text fontWeight={"bold"} textAlign={"right"}>{`₹ ${extra}`}</Text>
              <Text color={"red.500"} fontWeight={"bold"}>{`₹ ${remote}`} Remote Fee included</Text>
              </Box>
            </Box>
            <Box
              bgColor={"gray.200"}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              border={"1px solid silver"}
            >
              <Box alignItems={"center"} display="flex" marginLeft={"20px"}>
                <input type="checkbox" />
                <Text marginBottom={"10px"} marginLeft={"10px"}>
                  Add Shipping Insurance to your order ℹ️ ₹ 115.76
                </Text>
              </Box>
              <Text color={"gray"} fontSize={"14px"} marginLeft={"10px"}>
                
                <span color="red">*</span> Note: The time mentioned above are
                the shipping days by couriers, not including the order
                processing days by our warehouse.
              </Text>
            </Box>
          </Box>
        </Box>
        <br />
        <Box className="coupon_sec">
          <Box>
            <Text fontWeight={"bold"} color="gray">
              Coupon:{" "}
            </Text>
            <br />
            <Box>
              <input
                placeholder="Please enter or choose your coupon code"
                type="text"
              />
              <Button>Apply</Button>
            </Box>
          </Box>
          <Box>
            <Box>
              <span>Order SubTotal: </span>
              <Text>{sum.toFixed(2)}</Text>
            </Box>
            <Box>
              <span>Shipping Cost: </span>
              <Text>{ship ? extra : 0}</Text>
            </Box>
            <Box>
              <span>Grand Total: </span>
              <Text>{sum.toFixed(2)}</Text>
            </Box>
           <Link to={"/payment"}>
           <Button>Place Your Order</Button>
           </Link>
          </Box>
        </Box>
      </Box>
      <Box bgColor={"blue.50"} paddingTop={"5"}>
        <img
          id="payment-partners"
          src="https://content1.geekbuying.com/V1.4/en/images/shopcart_footicon.png"
          alt=""
        />
        <Text fontSize={"sm"} textAlign={"center"}>
          © 2012-2022 Geekbuying.com. All rights reserved.
        </Text>
        {/* <br /> */}
      </Box>
      <img src="" alt="" />
    </div>
  );
};

export default OrderSummaryPage;
