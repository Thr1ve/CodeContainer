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

test('highlightLine', t => {
  const { exampleCode, store: { dispatch, getState } } = t.context;

  const expected = fromJS([
    [
      { highlighted: false, char: 'a' },
      { highlighted: false, char: 'b' },
      { highlighted: false, char: 'c' }
    ],
    [
      { highlighted: true, char: '1' },
      { highlighted: true, char: '2' },
      { highlighted: true, char: '3' }
    ]
  ]);

  dispatch(initCode(exampleCode));

  const before = getState().get('lines').get(0);

  dispatch(highlightLine(1));

  const after = getState().get('lines').get(0);

  t.true(getState().get('lines').equals(expected), 'can highlight an entire line');
  t.is(before, after, 'lines not highlighted retain strict equality');
});

test('highlightColumn', t => {
  const { exampleCode, store: { dispatch, getState } } = t.context;

  const expected = fromJS([
    [
      { highlighted: false, char: 'a' },
      { highlighted: true, char: 'b' },
      { highlighted: false, char: 'c' }
    ],
    [
      { highlighted: false, char: '1' },
      { highlighted: false, char: '2' },
      { highlighted: false, char: '3' }
    ]
  ]);

  dispatch(initCode(exampleCode));

  const before = getState().get('lines').getIn([0, 0]);

  dispatch(highlightColumn(0, 1));

  const after = getState().get('lines').getIn([0, 0]);

  t.true(
    getState().get('lines').equals(expected),
    'can highlight an individual column in a single line'
  );
  t.is(before, after, 'columns not highlighted retain strict equality');

  dispatch(highlightColumn(0, 2));

  t.true(getState().getIn(['lines', 0, 1, 'highlighted']));
  t.true(getState().getIn(['lines', 0, 1, 'highlighted']), 'previous highlights are not lost');
});

test('setHighlights', t => {
  const { exampleCode, store: { dispatch, getState } } = t.context;

  const expected = fromJS([
    [
      { highlighted: true, char: 'a' },
      { highlighted: true, char: 'b' },
      { highlighted: true, char: 'c' }
    ],
    [
      { highlighted: true, char: '1' },
      { highlighted: true, char: '2' },
      { highlighted: true, char: '3' }
    ]
  ]);

  const expected2 = fromJS([
    [
      { highlighted: true, char: 'a' },
      { highlighted: true, char: 'b' },
      { highlighted: true, char: 'c' }
    ],
    [
      { highlighted: false, char: '1' },
      { highlighted: false, char: '2' },
      { highlighted: true, char: '3' }
    ]
  ]);

  dispatch(initCode(exampleCode));

  dispatch(setHighlights([0, 1]));

  t.true(
    getState().get('lines').equals(expected),
    'can highlight entire lines'
  );

  dispatch(setHighlights([0, { line: 1, columns: [2] }]));

  t.false(
    getState().getIn(['lines', 1, 0, 'highlighted']),
    'will reset previously highlighted characters'
  );

  t.true(
    getState().get('lines').equals(expected2),
    'can highlight individual columns'
  );
});
