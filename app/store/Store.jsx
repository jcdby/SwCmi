import { createStore }  from 'redux';
import reducers from '../reducers/index.jsx';

const store = createStore(reducers);

export default store;