import React from "react";
import styled from "styled-components";
import styles from "../styles/footer.module.css";
import {MdEmail} from "react-icons/md"
import {HiTicket} from "react-icons/hi"
import {RiCustomerService2Fill} from "react-icons/ri"
const Footer = () => {
  return (
    <FooterPageWraper>
      <p style={{textAlign:"center",fontWeight:"bold",color:"#2c8afb",fontSize:"19px",padding:"10px"}}>Why buy from Geekbuyin?</p>
      <hr />
      <div className={styles.search_parent}>

        <input type="text" placeholder="Enter email to get a 5% off coupon" />
        <button>Subscribe</button>
      </div>
      <hr />
      <div className={styles.information}>
        <div className={styles.info_first}>

            <ul className={styles.help}>
                <p>Help</p>
                <li>Order Status</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Waranty</li>
                <li>F&Q'S</li>
                <li>Sitemap</li>
            </ul>
            <ul className={styles.help}>
                <p>Supports</p>
                <li>Order Status</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Waranty</li>
                <li>F&Q'S</li>
                <li>Sitemap</li>
            </ul>
            <ul className={styles.help}>
                <p>Policies</p>
                <li>Order Status</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Waranty</li>
                <li>F&Q'S</li>
                <li>Sitemap</li>
            </ul>
            <div className={styles.support}></div>
            <div className={styles.policies}></div>
        </div>
        <div className={styles.info_second}>
            <div className={styles.apps}>
                <img src={process.env.PUBLIC_URL+"/geekbuying_apps.PNG"} alt="apps" />
            </div>
            <div className={styles.email}>
              <div style={{display:"flex",alignItems:"center"}}>
                <MdEmail color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>service@geekbuying.com</span>
              </div>
              <div style={{display:"flex",alignItems:"center"}}>
                <HiTicket color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>Ticket</span>
              </div>
              <div style={{display:"flex",alignItems:"center"}}>
                <RiCustomerService2Fill color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>service@geekbuying.com</span>
              </div>
            </div>
        </div>
      </div>

      <div id={styles.populer} style={{width:"100%",paddingLeft:"20px"}}>
        
        <p style={{fontWeight:"bold"}}>Populer Searches</p>
        <div className={styles.populer_search}>
          <div>ENGWE</div>
          <div>MinisForum</div>
          <div>Geekbuying Coupon</div>
          <div>Roborock</div>
          <div>Powkiddy</div>
          <div>Miyoo mini</div>
          <div>Sculpfun</div>
          <div>Leserpacker</div>
          <div>Wltoys</div>
          <div>Mini laptop</div>
        </div>
      </div>
      <hr />
    </FooterPageWraper>
  );
};
const FooterPageWraper = styled.div`
  width: 100%;
  background-color: #f1f6fd;
  margin: auto;
  margin-top:50px;
  height: auto;
  padding-bottom:5px;


  @media (max-width: 425px) {
    display:none;
  }
`;
export default Footer;
