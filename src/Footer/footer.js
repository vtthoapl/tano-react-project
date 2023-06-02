import React, { Component } from 'react'
import logoFooter from '../images/logoFooter.png'
import footer from '../Footer/footer.css'
export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='logo-footer'>.</div>
        <div className='footer-content'>
            <div className='about-content'>
                <h6> Responsible Gaming</h6>
                <p>Gambling can be addictive and may result in difficulties to stop even when you know it is causing issues. Gambling is not a solution for financial problems – only play for what you can afford to lose! Keep track of how much time and money you are spending online and take action if needed. Play responsibly and get in touch with us or use the online tools here should you have any concerns.</p>
            </div>
            <div className='info-content'>
                <p>Cookies policy</p>
                <p>Game rules</p>
                <p>Contacts Us</p>
                <p>Complaints</p>
            </div>
            <div className='icons-content'>
                <ul>
                    <li>
                        facebook
                    </li>
                    <li> instagram</li>
                </ul>
            </div>
        </div>
      </footer>
    )
  }
}
