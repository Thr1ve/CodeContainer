import React, { PropTypes } from 'react';
import { List } from 'immutable';

import Line from '../Line';

const CodeContainer = React.createClass({
  propTypes: {
    lines: PropTypes.instanceOf(List)
  },

  render() {
    return (
      <div>
        <pre>
          {
            this.props.lines.map((line, i) =>
              <Line
                key={i}
                columns={line}
                lineNumber={i + 1}
              />)
          }
        </pre>
      </div>
    );
  }
});

export default CodeContainer;
