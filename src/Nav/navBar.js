import logomain from '../images/logomain.png';
import ava from '../images/ava.png';
import coin from '../images/coin.png';
import usaflag from '../images/usaflag.png';

 
import React, { Component } from 'react';
import { Navbar, Nav, BImg} from 'bootstrap-4-react';
import '../Nav/navBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav-container">
        <Navbar.Brand href="#">
          <BImg className="logomain"
            src={logomain}
            width="200"
            display="inline-block"
            align="top"
            mr="1"
          />
        </Navbar.Brand>
          <Navbar.Nav className="main-container">
            <Nav.ItemLink href="#" active>JACKPOT</Nav.ItemLink>
            <Nav.ItemLink href="#">CASINO GAMES</Nav.ItemLink>
            <Nav.ItemLink href="#">AFFILATES</Nav.ItemLink>
            <Nav.ItemLink href="#">TNOCOIN</Nav.ItemLink>
          </Navbar.Nav>  
          <div className="user-container">
          <Navbar.Brand href="#">
          <BImg
          className='ava-pic'
            src={ava}
            width="50"
            display="inline-block"
            align="top"
            mr="1"
          />Vuong Thi
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <BImg
            src={coin}
            width="20"
            display="inline-block"
            align="top"
            mr="1"
          /> $200,000
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <BImg
          className="flag-pic"
            src={usaflag}
            width="50"
            display="inline-block"
            align="top"
            mr="1"
          />
        </Navbar.Brand>
          </div>
      </Navbar>
    );
  }
}
