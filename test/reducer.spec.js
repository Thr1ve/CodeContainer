import test from 'ava';
import { createStore } from 'redux';
import { fromJS } from 'immutable';

import codeReducer from '../src/reducers';

import {
  initCode,
  setHighlights,
  highlightLine,
  highlightColumn
} from '../src/actions';

test.beforeEach(t => {
  const exampleCode = (
`abc
123`
  );

  t.context.store = createStore(codeReducer);
  t.context.exampleCode = exampleCode;
});

test('INIT_CODE', t => {
  const { exampleCode, store: { dispatch, getState } } = t.context;

  const expected = fromJS([
  ]);

  dispatch(initCode(exampleCode));

  t.true(getState().get('lines').equals(expected), 'can initialize lines');
  t.true(getState().get('blank').equals(expected), 'can initialize blank');
});
