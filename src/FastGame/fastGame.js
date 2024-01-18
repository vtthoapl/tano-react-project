import React, { Component } from 'react';
import './fastGame.css';
import { BDiv, List } from 'bootstrap-4-react';

export default class FastGame extends Component {
  render() {
    return (
      <div className='fastgame'>
      <BDiv
        className="fastgame-container"
        display="flex"
      >
        <BDiv className='title-cover'>
        <h3 className='title-heading'> FastGame</h3>
        </BDiv>
        <BDiv className='number-container' p="2">
          <List inline>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                1
              </a>
            </List.Item>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                2
              </a>
            </List.Item>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                3
              </a>
            </List.Item>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                4
              </a>
            </List.Item>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                5
              </a>
            </List.Item>
            <List.Item inline className="number-border">
              <a className="number-a" href>
                6
              </a>
            </List.Item>
          </List>
        </BDiv>
        <BDiv p="2">
          <span className='heading-span'>Until next draw</span>
          <trong className='time-strong'>10:30</trong>
        </BDiv>
      </BDiv>
      </div>
    );
  }
}
