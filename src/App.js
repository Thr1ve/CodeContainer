import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import thunk from '@thr1ve/thunk';

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
    const interval = 500;
    thunk(interval, () => {
      dispatch(setHighlights([{ line: 0, columns: [0, 2] }]));
    })
      .thunk(interval, () => {
        dispatch(setHighlights([{ line: 0, columns: [1, 3] }]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([{ line: 0, columns: [2, 4] }]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([{ line: 0, columns: [3, 5] }]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([{ line: 0, columns: [4, 6] }]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([{ line: 0, columns: [5, 7] }]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([0]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([1]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([2]));
      })
      .thunk(interval, () => {
        dispatch(setHighlights([3]));
      })
      .thunk(interval, () => {
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
