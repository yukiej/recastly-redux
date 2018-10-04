
import actionSpec from './reduxSpec/actions.jsx';
import reducerSpec from './reduxSpec/reducers.js';
import storeSpec from './reduxSpec/store.js';
import containerSpec from './reduxSpec/containers.jsx';
import {createStore} from 'redux';
import configureStore from '../src/store/store.js';
import rootReducer from '../src/reducers/main.js';

const store = configureStore(rootReducer);

render(
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementbyID('app')
);