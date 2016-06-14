import React, { PropTypes } from 'react';

import styles from './styles.css';

const Column = React.createClass({
  propTypes: {
    char: PropTypes.string.isRequired,
    highlighted: PropTypes.bool
  },

  shouldComponentUpdate(nextProps) {
    return (
      this.props.highlighted !== nextProps.highlighted ||
      this.props.char !== nextProps.char
    );
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
