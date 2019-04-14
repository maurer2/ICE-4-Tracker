import React from 'react';

import { ReactComponent as SpinnerSVG } from './Spinner.svg';
import styles from './Spinner.module.css';

const Spinner = () => (
  <SpinnerSVG className={ styles.spinner } />
);

export default Spinner;
