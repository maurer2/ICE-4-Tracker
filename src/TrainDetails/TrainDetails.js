import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TrainDetails.module.css';

class TrainDetails extends Component {
  render() {
    const { selectedTrainNumber, trainDetails } = this.props;
    const trainName = `ICE-${selectedTrainNumber}`;

    return (
      <div className={ styles['train-details'] }>
        <h2 className={ styles.title }>
          Informationen zu <strong>{ trainName }</strong>
        </h2>
        <dl className={ styles.information }>
          <dt className={ styles.number }>Nummer:</dt>
          <dd className={ styles.value }>{ trainName }</dd>

          <span className={ styles.breaker }></span>

          <dt className={ styles.origin }>Start:</dt>
          <dd className={ styles.value }>{ trainDetails.origin }</dd>

          <span className={ styles.breaker }></span>

          <dt className={ styles.destination }>Ziel:</dt>
          <dd className={ styles.value }>{ trainDetails.destination }</dd>
        </dl>
      </div>
    );
  }
}

export default TrainDetails;

TrainDetails.propTypes = {
  selectedTrainNumber: PropTypes.string.isRequired,
  trainDetails: PropTypes.object.isRequired,
};
