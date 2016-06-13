import test from 'ava';
import { fromJS } from 'immutable';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import codeReducer from '../src/reducers';

import {
  initCode, setHighlights,
  highlightLine, highlightColumn
} from '../src/actions';

test.beforeEach(t => {
  const exampleCode = (
`abc
123`
  );

  t.context.store = createStore(
    codeReducer,
    applyMiddleware(thunk)
  );
  t.context.exampleCode = exampleCode;
});

test('initCode', t => {
  const { exampleCode, store: { dispatch, getState } } = t.context;

  const expected = fromJS([
    [
      { highlighted: false, char: 'a' },
      { highlighted: false, char: 'b' },
      { highlighted: false, char: 'c' }
    ],
    [
      { highlighted: false, char: '1' },
      { highlighted: false, char: '2' },
      { highlighted: false, char: '3' }
    ]
  ]);

  dispatch(initCode(exampleCode));

  t.true(getState().get('lines').equals(expected), 'can initialize lines');
  t.true(getState().get('template').equals(expected), 'can initialize template');
});
