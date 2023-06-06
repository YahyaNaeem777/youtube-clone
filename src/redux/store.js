import { applyMiddleware, createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
