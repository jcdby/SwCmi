import { createStore, applyMiddleware }  from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;