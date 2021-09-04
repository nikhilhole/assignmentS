import React from 'react';
import Route from './src/routing/route';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer/RootReducce';
const masterReducer = combineReducers({
  userLogin: rootReducer
})
const store = createStore(masterReducer, applyMiddleware(thunk));
App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App;