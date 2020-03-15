import { createStore, applyMiddleware, combineReducers } from "redux";
import reList from "reducers/reList";
import reList_item from "reducers/reList-item";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

//,applyMiddleware(logger,thunk)
import createSagaMiddlware from "redux-saga";
import { watchLoadData } from "./sagas";
const rootReducer = combineReducers({ reList, reList_item });
// const sagaMiddlware = createSagaMiddlware();
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// sagaMiddlware.run(watchLoadData)

export default store;
