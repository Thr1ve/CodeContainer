import {
  SET_CODE, SET_HIGHLIGHTS,
  HIGHLIGHT_LINE, HIGHLIGHT_COLUMN
} from '../actions';

import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
  template: List(),
  lines: List()
});

export default function codeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CODE:
      const code = fromJS(action.code);
      return state.set('template', code).set('lines', code);
    case HIGHLIGHT_LINE:
      return state.updateIn(
        ['lines', action.line],
        line => line.map(column => column.set('highlighted', true))
      );
    case HIGHLIGHT_COLUMN:
      return state.updateIn(
        ['lines', action.line, action.column],
        column => column.set('highlighted', true)
      );
    case SET_HIGHLIGHTS:
      return state.set('lines',
        action.highlights.reduce((prev, cur) => {
          if (typeof cur === 'number') {
            return prev.update(cur,
              line => line.map(column => column.set('highlighted', true))
            );
          } else if (typeof cur === 'object') {
            return prev.set(cur.line,
              cur.columns.reduce((prev2, cur2) => {
                return prev2.update(cur2, col => col.set('highlighted', true));
              }, prev.get(cur.line))
            );
          }
          return prev;
        }, state.get('template'))
      );
    default:
      return state;
  }
}
