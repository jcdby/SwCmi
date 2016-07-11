import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/Store'
import APPRouter from './router/Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <APPRouter/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('suwonApp')
);

