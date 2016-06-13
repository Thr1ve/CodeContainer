import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { thunk } from '@thr1ve/utils';

import CodeContainer from './components/CodeContainer';

import { initCode, setHighlights } from './actions';

import { getRandomCharParagraph } from './lib';

const App = React.createClass({
  componentDidMount() {
    this.props.dispatch(
      initCode(
        getRandomCharParagraph(100, 100)
      )
    );
  },

  highlightSomething() {
  },

  render() {
    return (
      <div>
        <button onClick={this.highlightSomething}> Highlight </button>
        <CodeContainer lines={this.props.lines} />
        {/*<pre>
          {JSON.stringify(this.props.lines, null, 2)}
        </pre>*/}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    lines: state.lines
  };
}

export default connect(mapStateToProps)(App);
