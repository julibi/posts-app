import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise';
import PostReducer from './reducers/post_reducer';
import { reducer as FormReducer } from 'redux-form';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const RootReducer = combineReducers({
  Posts: PostReducer,
  form: FormReducer
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
