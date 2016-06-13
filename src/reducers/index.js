import { SET_CODE, SET_HIGHLIGHTS } from '../actions';

import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
  template: List(),
  lines: List()
});

export default function codeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CODE:
      const code = fromJS(action.code);
      return state
        .set('template', code)
        .set('lines', code);
    case SET_HIGHLIGHTS:
      return state
    default:
      return state;
  }
}
