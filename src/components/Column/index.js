import React, { PropTypes } from 'react';

import styles from './styles.css';

const Column = ({ highlighted = false, char }) =>
  <span className={highlighted ? styles.highlighted : styles.notHighlighted}>
    {char}
  </span>;

Column.propTypes = {
  char: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
};

export default Column;
