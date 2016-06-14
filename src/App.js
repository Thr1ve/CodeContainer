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
    const { dispatch } = this.props;
    thunk(200, () => {
      dispatch(setHighlights([{ line: 0, columns: [0, 2] }]));
    })
      .thunk(200, () => {
        dispatch(setHighlights([{ line: 0, columns: [1, 3] }]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([{ line: 0, columns: [2, 4] }]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([{ line: 0, columns: [3, 5] }]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([{ line: 0, columns: [4, 6] }]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([{ line: 0, columns: [5, 7] }]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([0]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([1]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([2]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([3]));
      })
      .thunk(200, () => {
        dispatch(setHighlights([4]));
      });
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
    lines: state.get('lines')
  };
}

export default connect(mapStateToProps)(App);
