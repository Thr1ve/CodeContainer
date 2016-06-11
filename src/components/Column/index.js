import React from 'react';

import styles from './styles.css';

const Column = ({ highlighted, char }) =>
  <div className={styles.base}>
    {char}
  </div>;

export default Column;
