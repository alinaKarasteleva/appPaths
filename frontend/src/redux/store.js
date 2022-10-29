import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReduser from './reducers/rootReducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { mySaga } from './sagas/mySaga'

const saga = createSagaMiddleware()


// const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(saga)))

saga.run(mySaga)


export default store