import React, { PropTypes } from 'react';

import Line from '../Line';

const CodeContainer = ({ lines }) =>
  <div>
    <pre>
      {lines.map((line, i) => <Line key={i} columns={line} />)}
    </pre>
  </div>;

CodeContainer.propTypes = {
  lines: PropTypes.array.isRequired
};

export default CodeContainer;
