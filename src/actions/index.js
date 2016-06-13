export const SET_CODE = 'SET_CODE';
export const setCode = code => ({ type: SET_CODE, code });

export const initCode = code => dispatch => {
  dispatch(setCode(processCode(code)));
};

function processCode(code) {
  return code
    .split('\n')
    .map(line => line
      .split('')
      .map(char => ({ highlighted: false, char }))
    );
}

export const HIGHLIGHT_LINE = 'HIGHLIGHT_LINE';
export const highlightLine = line => ({ type: HIGHLIGHT_LINE, line });

export const HIGHLIGHT_COLUMN = 'HIGHLIGHT_COLUMN';
export const highlightColumn = (line, column) => ({ type: HIGHLIGHT_COLUMN, line, column });

export const SET_HIGHLIGHTS = 'SET_HIGHLIGHTS';
export const setHighlights = highlights => ({ type: SET_HIGHLIGHTS, highlights });
