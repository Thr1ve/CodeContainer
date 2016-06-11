import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import CodeContainer from './components/CodeContainer';

const store = createStore(reducer)

const App = () =>
  <div>
    <CodeContainer />
  </div>;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
