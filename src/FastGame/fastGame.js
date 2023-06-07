import React, { Component } from 'react';
import './fastGame.css';

export default class FastGame extends Component {
  render() {
    return (
      <div className="fastgame">
        <div className="container">
          <div className="row">
            <div className="col">Fast Game</div>
            <div className="col">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button  className="btn">
                  1
                </button>
                <button  className="btn">
                  2
                </button>
                <button  className="btn">
                  3
                </button>
                <button  className="btn">
                  4
                </button>
                <button  className="btn">
                  5
                </button>
                <button className="btn">
                  6
                </button>
              </div>
            </div>
            <div className="col">
              Until next draw <span>10:30</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
