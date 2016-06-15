import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/Store'
import APPRouter from './router/Router'

ReactDOM.render(
    <Provider store={store}>
        <APPRouter/>
    </Provider>,
    document.getElementById('suwonApp')
);

