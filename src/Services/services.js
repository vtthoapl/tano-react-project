import React, { Component } from 'react';
import { BDiv, BImg } from 'bootstrap-4-react';
import './services.css';
import ellipse1 from '../images/Ellipse1.png';
import ellipse2 from '../images/Ellipse2.png';
import ellipse3 from '../images/Ellipse3.png';
import ellipse4 from '../images/Ellipse4.png';

export default class Services extends Component {
  render() {
    return (
      <>
        <BDiv className="services-container" display="flex">
          <BDiv className="services-collumn">
            <div className="image-container">
              <BImg className="collumn-image" src={ellipse1} />
            </div>
            <div className="collumn-content">
              <h3>Deposits in Euros</h3>
              <p>
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
          </BDiv>
          <BDiv className="services-collumn">
            <div className="image-container">
              <BImg className="collumn-image" src={ellipse2} />
            </div>
            <div className="collumn-content">
              <h3>24/7 SUPPORT</h3>
              <p>
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
          </BDiv>
          <BDiv className="services-collumn">
            <div className="image-container">
              <BImg className="collumn-image" src={ellipse3} />
            </div>
            <div className="collumn-content">
              <h3>SAFE & SECURE</h3>
              <p>
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
          </BDiv>
          <BDiv className="services-collumn">
            <div className="image-container">
              <BImg className="collumn-image" src={ellipse4} />
            </div>
            <div className="collumn-content">
              <h3>PROVABLY FAIR</h3>
              <p>
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
          </BDiv>
          
        </BDiv>
        <div className='signup-container'>
          <a href className="btn btn-lg signUp-a">
            Sign up now and start winning
          </a>
        </div>
      </>
    );
  }
}
