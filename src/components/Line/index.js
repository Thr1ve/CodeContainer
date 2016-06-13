import React, { PropTypes } from 'react';

import styles from './styles.css';

import Column from '../Column';

const Line = ({ columns, /* lineNumber */ }) =>
  <div className={styles.base}>
    {columns.map((column, i) => <Column key={i} {...column} />)}
  </div>;

Line.propTypes = {
  columns: PropTypes.array.isRequired,
  // lineNumber: PropTypes.number.isRequired
};

export default Line;
