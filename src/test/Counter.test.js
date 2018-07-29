import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../container/Counter';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

const initialState = {}; 
const mockStore = configureStore();

it('renders without crashing', () => {
  const store = mockStore(initialState)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
         <Counter />
       </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
