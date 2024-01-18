import React, { Component } from 'react';
import { List, Media, BImg, BDiv, BH5 } from 'bootstrap-4-react';
import '../Table/table.css';
import ava from '../images/ava.png';

export default class Table extends Component {
  render() {
    return (
      <div className="table-container">
        <div className="collumn first">
          <BDiv className="header-collumn">MINI BOOM - WIN X9</BDiv>
          <h4>Latest winners</h4>
          <List unstyled>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
          </List>
          <a className="details-a" href>
            View details
          </a>
          <div>
            <a
              href="#carouselExampleFade"
              className="btn btn-success btn-lg order-a"
            >
              ORDER TICKETS
            </a>
          </div>
        </div>
        <div className="collumn second">
          <BDiv className="header-collumn">SMART BOOM - WIN X9</BDiv>
          <h4>Latest winners</h4>
          <List unstyled>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
          </List>
          <a className="details-a" href>
            View details
          </a>
          <div>
            <a
              href="#carouselExampleFade"
              className="btn btn-success btn-lg order-a"
            >
              ORDER TICKETS
            </a>
          </div>
        </div>
        <div className="collumn third">
          <BDiv className="header-collumn">BIG BOOM - WIN X9</BDiv>
          <h4>Latest winners</h4>
          <List unstyled>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
            <li>
              <BDiv display="flex" justifyContent="around">
                <BDiv p="2">
                  <BImg className="image" src={ava} mr="3" />
                </BDiv>
                <BDiv className="name" p="2">
                  Vuong Thi
                </BDiv>
                <BDiv className="number" p="2">
                  8
                </BDiv>
                <BDiv className="money" p="2">
                  $200,000
                </BDiv>
              </BDiv>
            </li>
          </List>
          <a className="details-a" href>
            View details
          </a>
          <div>
            <a
              href="#carouselExampleFade"
              className="btn btn-success btn-lg order-a"
            >
              ORDER TICKETS
            </a>
          </div>
        </div>
  
      </div>
    );
  }
}
