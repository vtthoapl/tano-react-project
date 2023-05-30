
import ava from '../images/ava.png';
import coin from '../images/coin.png';
import usaflag from '../images/usaflag.png';

import React, { Component } from 'react'
import '../Nav/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav-container'>
         <Nav>
        <Nav.Item>
          <Nav.Link active href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav>
        <Nav.Item>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav.Item>
        </Nav>
      </Nav>
      </div>
        
    );
  }
}
