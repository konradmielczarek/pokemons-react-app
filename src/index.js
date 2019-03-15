import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppStore from './stores/AppStore';

import './styles/styles.scss';

import { Provider } from 'mobx-react';

const store = {
  appStore: new AppStore()
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#root")
);
