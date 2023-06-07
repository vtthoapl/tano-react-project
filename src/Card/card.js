import React, { Component } from 'react';
import './card.css';
import { BImg } from 'bootstrap-4-react';
import master from '../../src/images/mastercard.png';
import visa from '../../src/images/visa.png';
export default class Card extends Component {
  render() {
    return (
        <div className="card-container">
            <ul className='card-content'>
                <li className='card-cover'>
                    <a className='master-card' href>
                        <BImg src={master}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='visa-card' href>
                        <BImg src={visa}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='master-card' href>
                        <BImg src={master}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='visa-card' href>
                        <BImg src={visa}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='master-card' href>
                        <BImg src={master}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='visa-card' href>
                        <BImg src={visa}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='master-card' href>
                        <BImg src={master}></BImg>
                    </a>
                </li>
                <li className='card-cover'>
                    <a className='visa-card' href>
                        <BImg src={visa}></BImg>
                    </a>
                </li>
               
            </ul>
        </div>
    );
  }
}
