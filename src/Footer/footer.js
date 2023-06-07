import React, { Component } from 'react';
import '../Footer/footer.css';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { RiGoogleLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="logo-footer"></div>
        <div className="footer-content">
          <div className="about-content">
            <h6> Responsible Gaming</h6>
            <p>
              Gambling can be addictive and may result in difficulties to stop
              even when you know it is causing issues. Gambling is not a
              solution for financial problems 
              only play for what you can
              afford to lose! 
            </p>
          </div>
          <div className="info-content">
            <p>Cookies policy</p>
            <p>Game rules</p>
            <p>Contacts Us</p>
            <p>Complaints</p>
          </div>
          <div className="icons-content">
            <ul className='icons-footer'>
              <li>
                <GrFacebookOption size={40}/>
              </li>
              <li>
                <FaInstagram size={40} />
              </li>
              <li>
                <RiGoogleLine size={40}/>
              </li>
              <li>
                <FiTwitter size={40}/>
              </li>
            </ul>
           {/*  <div>Contact: info@tano.io</div> */}
          </div>
        </div>
      </footer>
    );
  }
}
