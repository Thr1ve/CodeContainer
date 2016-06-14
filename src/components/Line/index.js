import React, { PropTypes } from 'react';
import { List } from 'immutable';

import styles from './styles.css';

import Column from '../Column';

const Line = ({ columns, lineNumber }) =>
  <div className={styles.base}>
    {
      columns.map((column, i) =>
        <Column
          key={i}
          highlighted={column.get('highlighted')}
          char={column.get('char')}
        />)
    }
  </div>;

Line.propTypes = {
  columns: PropTypes.instanceOf(List),
  lineNumber: PropTypes.number
};

export default Line;
