import React, { PropTypes } from 'react';
import { List } from 'immutable';

import Line from '../Line';

const CodeContainer = ({ lines }) =>
  <div>
    <pre>
      {
        lines.map((line, i) =>
          <Line
            key={i}
            columns={line}
            lineNumber={i + 1}
          />)
      }
    </pre>
  </div>;

CodeContainer.propTypes = {
  lines: PropTypes.instanceOf(List)
};

export default CodeContainer;
