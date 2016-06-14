import React, { PropTypes } from 'react';

import styles from './styles.css';

const Column = React.createClass({
  propTypes: {
    char: PropTypes.string.isRequired,
    highlighted: PropTypes.bool
  },

  render() {
    const { highlighted, char } = this.props;
    return (
      <span className={highlighted ? styles.highlighted : styles.notHighlighted}>
        {char}
      </span>
    );
  }
});

export default Column;
