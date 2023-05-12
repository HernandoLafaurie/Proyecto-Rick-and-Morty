import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './Reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default Store