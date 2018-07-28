import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import Counter from './container/Counter';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./reducer/reducer"
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
         <Counter />
       </Provider>, document.getElementById('root'));
registerServiceWorker();
