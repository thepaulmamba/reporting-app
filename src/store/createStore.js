import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// using thunk pattern is OPTIONAL, but can be helpful to compose async actions
// SEE: https://github.com/gaearon/redux-thunk
import thunk from 'redux-thunk';

// here, we're sourcing *all* of the redux reducers at once
import * as reducers from './reducers';

const defaultData = {};
const middleWares = [
  thunk
];


export default function(data = defaultData) {

  let finalCreateStore;
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = compose ;
  /* eslint-enable */

  finalCreateStore = composeEnhancers(
    applyMiddleware(...middleWares)
  )(createStore);

  const reducer = combineReducers(reducers);

  // create our single redux store, and bind the single reducer to it
  return finalCreateStore(reducer, data);
}
