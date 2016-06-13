export const INIT_CODE = 'INIT_CODE';
export const initCode = code => ({ type: INIT_CODE, code });

export const HIGHLIGHT_LINE = 'HIGHLIGHT_LINE';
export const highlightLine = line => ({ type: HIGHLIGHT_LINE, line });

export const HIGHLIGHT_COLUMN = 'HIGHLIGHT_COLUMN';
export const highlightColumn = (line, column) => ({ type: HIGHLIGHT_COLUMN, line, column });

export const SET_HIGHLIGHTS = 'SET_HIGHLIGHTS';
export const setHighlights = highlights => ({ type: SET_HIGHLIGHTS, highlights });
