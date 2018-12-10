import React, { Component } from 'react';
import './TrainDetails.css';

class TrainDetails extends Component {
  render(){
    return (
      <div className="train-details">
        <h2 className="subtitle">
          Zug-Informationen
        </h2>
        <dl className="information">
          <dt className="train-number">Nummer</dt>
          <dd className="train-number-value">ICE-555</dd>

          <dt className="train-origin">Start</dt>
          <dd className="train-origin-value">Stadt 1</dd>

          <dt className="train-destination">Ziel</dt>
          <dd className="train-destination-value">Stadt 2</dd>
        </dl>
      </div>
    )
  }
}

export default TrainDetails;
