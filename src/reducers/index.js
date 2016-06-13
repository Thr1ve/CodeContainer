import { INIT_CODE, SET_HIGHLIGHTS } from '../actions';

import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
  blank: List(),
  lines: List()
});

export default function codeReducer(state = defaultState, action) {
  switch (action.type) {
    case INIT_CODE:
      return state
    case SET_HIGHLIGHTS:
      return state
    default:
      return state;
  }
}
