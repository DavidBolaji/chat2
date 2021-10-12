import React from 'react';
import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import App from './App';
import store from './store/auth-redux' 

ReactDom.render(<Provider store={store}><App  /></Provider>,document.getElementById('root')) 