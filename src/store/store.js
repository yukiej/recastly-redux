import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState, 
    applyMiddleware(thunk)
  );
}

const store = configureStore({videoList: [], currentVideo: null});

export default store;