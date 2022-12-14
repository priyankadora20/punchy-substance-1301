import React from "react";
import styled from "styled-components";
import styles from "../styles/footer.module.css";
import {MdEmail} from "react-icons/md"
import {HiTicket} from "react-icons/hi"
import {RiCustomerService2Fill} from "react-icons/ri"
const Footer = () => {
  return (
    <FooterPageWraper>
      <p style={{textAlign:"center",fontWeight:"bold",color:"#2c8afb"}}>Why buy from Geekbuyin?</p>
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
              <div>
                <MdEmail color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>service@geekbuying.com</span>
              </div>
              <div>
                <HiTicket color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>Ticket</span>
              </div>
              <div>
                <RiCustomerService2Fill color="#2c8afb"/>
                <span style={{paddingLeft:"10px"}}>service@geekbuying.com</span>
              </div>
            </div>
        </div>
      </div>

      <div style={{maxWidth:"1100px",paddingLeft:"20px"}}>
        
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
  max-width: 1100px;
  background-color: #f1f6fd;
  margin: auto;
  height: auto;
  padding-bottom:5px;
`;
export default Footer;
