import { createStore, applyMiddleware, combineReducers } from "redux";
import reList from "./reducers/reList";
import reList_item from "./reducers/reList-item";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ reList, reList_item });

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
