import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import LocalStorageManager from './localStorage';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
const localStorageManager = new LocalStorageManager();
const rootReducer = combineReducers({
  form: formReducer,
  userReducer : userReducer
})
const store = createStore(rootReducer, localStorageManager.loadState(), applyMiddleware(thunk));
store.subscribe(() => {
  localStorageManager.saveState(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
