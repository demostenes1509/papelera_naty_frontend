import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import 'styles/styles.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from 'serviceWorker';
import reducers from 'Reducers';
import sagas from 'Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);
  
// then run the saga
sagaMiddleware.run(sagas)  

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root')
);
  


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
