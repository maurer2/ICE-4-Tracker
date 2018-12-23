import React, { Component } from 'react';
import './TrainDetails.css';

class TrainDetails extends Component {
  render(){
    const trainName = `ICE-${ this.props.selectedTrainNumber }`;
    return (
      <div className="train-details">
        <h2 className="subtitle">
          Informationen zu { trainName }
        </h2>
        <dl className="information">
          <dt className="number">Nummer:</dt>
          <dd className="value">{ trainName }</dd>

          <span className="breaker"></span>

          <dt className="origin">Start:</dt>
          <dd className="value">Stadt 1</dd>

          <span className="breaker"></span>

          <dt className="destination">Ziel:</dt>
          <dd className="value">Stadt 2</dd>
        </dl>
      </div>
    )
  }
}

export default TrainDetails;
