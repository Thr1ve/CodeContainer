import React, { PropTypes } from 'react';
import { List } from 'immutable';

import styles from './styles.css';

import Column from '../Column';

const Line = React.createClass({
  propTypes: {
    columns: PropTypes.instanceOf(List),
    lineNumber: PropTypes.number
  },

  render() {
    return (
      <div className={styles.base}>
        {
          this.props.columns.map((column, i) =>
            <Column
              key={i}
              highlighted={column.get('highlighted')}
              char={column.get('char')}
            />)
        }
      </div>
    );
  }
});

export default Line;
