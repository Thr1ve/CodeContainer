import React from 'react';

import styles from './styles.css';

const Column = ({ highlighted, char }) =>
  <div className={highlighted ? styles.highlighted : styles.notHighlighted}>
    {char}
  </div>;

export default Column;
