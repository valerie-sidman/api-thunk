import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import listReducer from '../reducers/listReducer';
import fieldReducer from '../reducers/fieldReducer';
import editReducer from '../reducers/editReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  serviceList: listReducer,
  serviceField: fieldReducer,
  serviceEdit: editReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
